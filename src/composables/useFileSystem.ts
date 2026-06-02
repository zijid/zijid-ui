/**
 * useFileSystem - file operations API
 *
 * Read/write files and folders via File System Access API (with user grant)
 * or fall back to IndexedDB when local FS is unavailable.
 */

import { ref } from 'vue'

// ---- IndexedDB helpers ----

const DB_NAME = 'zijid-ui-fs'
const DB_VERSION = 1
const STORE_NAME = 'files'

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'path' })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function dbRead(path: string): Promise<string | null> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const req = store.get(path)
    req.onsuccess = () => resolve(req.result?.content ?? null)
    req.onerror = () => reject(req.error)
    tx.oncomplete = () => db.close()
  })
}

async function dbWrite(path: string, content: string): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    store.put({ path, content })
    tx.oncomplete = () => { db.close(); resolve() }
    tx.onerror = () => reject(tx.error)
  })
}

async function dbRemove(path: string): Promise<boolean> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const req = store.delete(path)
    req.onsuccess = () => resolve(true)
    req.onerror = () => reject(req.error)
    tx.oncomplete = () => db.close()
  })
}

async function dbList(prefix?: string): Promise<string[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const req = store.getAllKeys()
    req.onsuccess = () => {
      const keys = (req.result as string[]).filter(k =>
        prefix === undefined || prefix === '' || k.startsWith(prefix)
      )
      resolve(keys)
    }
    req.onerror = () => reject(req.error)
    tx.oncomplete = () => db.close()
  })
}

async function dbExists(path: string): Promise<boolean> {
  const content = await dbRead(path)
  return content !== null
}

async function dbMkdir(path: string): Promise<boolean> {
  const existing = await dbRead(path)
  if (existing !== null) return false
  await dbWrite(path, '')
  return true
}

async function dbRmdir(path: string, recursive: boolean): Promise<boolean> {
  if (!recursive) {
    const children = await dbList(path.endsWith('/') ? path : path + '/')
    if (children.length > 0) return false
  }
  await dbRemove(path)
  const prefix = path.endsWith('/') ? path : path + '/'
  const keys = await dbList(prefix)
  for (const k of keys) await dbRemove(k)
  return true
}

async function dbIsDirectory(path: string): Promise<boolean> {
  const marker = await dbRead(path)
  if (marker === '') return true
  const prefix = path.endsWith('/') ? path : path + '/'
  const children = await dbList(prefix)
  return children.length > 0
}

async function dbRename(oldPath: string, newPath: string): Promise<boolean> {
  const content = await dbRead(oldPath)
  if (content !== null) {
    await dbWrite(newPath, content)
    await dbRemove(oldPath)
  }
  const prefix = oldPath.endsWith('/') ? oldPath : oldPath + '/'
  const children = await dbList(prefix)
  const newPrefix = newPath.endsWith('/') ? newPath : newPath + '/'
  for (const k of children) {
    const relative = k.slice(prefix.length)
    await dbWrite(newPrefix + relative, (await dbRead(k)) ?? '')
    await dbRemove(k)
  }
  if (content === null && children.length === 0) return false
  return true
}

async function dbCopy(src: string, dest: string): Promise<boolean> {
  const content = await dbRead(src)
  if (content !== null) {
    await dbWrite(dest, content)
  }
  const prefix = src.endsWith('/') ? src : src + '/'
  const children = await dbList(prefix)
  const destPrefix = dest.endsWith('/') ? dest : dest + '/'
  for (const k of children) {
    const relative = k.slice(prefix.length)
    const childContent = await dbRead(k)
    if (childContent !== null) {
      await dbWrite(destPrefix + relative, childContent)
    }
  }
  if (content === null && children.length === 0) return false
  return true
}

// ---- File System Access API helpers ----

let rootHandle: FileSystemDirectoryHandle | null = null

async function resolveDirFromRoot(path: string): Promise<FileSystemDirectoryHandle | null> {
  if (!rootHandle) return null
  const parts = path.replace(/^\/+/, '').split('/').filter(Boolean)
  let dir = rootHandle
  for (const part of parts) {
    try {
      dir = await dir.getDirectoryHandle(part)
    } catch {
      return null
    }
  }
  return dir
}

async function resolvePathFromRoot(path: string): Promise<{ parent: FileSystemDirectoryHandle; name: string } | null> {
  if (!rootHandle) return null
  const parts = path.replace(/^\/+/, '').split('/').filter(Boolean)
  const name = parts.pop()
  if (!name) return null
  let dir = rootHandle
  for (const part of parts) {
    try {
      dir = await dir.getDirectoryHandle(part)
    } catch {
      return null
    }
  }
  return { parent: dir, name }
}

async function fsRead(path: string): Promise<string | null> {
  const resolved = await resolvePathFromRoot(path)
  if (!resolved) return null
  try {
    const fileHandle = await resolved.parent.getFileHandle(resolved.name)
    const file = await fileHandle.getFile()
    return await file.text()
  } catch {
    return null
  }
}

async function fsWrite(path: string, content: string): Promise<boolean> {
  const resolved = await resolvePathFromRoot(path)
  if (!resolved) return false
  try {
    const fileHandle = await resolved.parent.getFileHandle(resolved.name, { create: true })
    const writable = await fileHandle.createWritable()
    await writable.write(content)
    await writable.close()
    return true
  } catch {
    return false
  }
}

async function fsRemove(path: string): Promise<boolean> {
  const resolved = await resolvePathFromRoot(path)
  if (!resolved) return false
  try {
    await resolved.parent.removeEntry(resolved.name, { recursive: true })
    return true
  } catch {
    return false
  }
}

async function fsList(dir?: string): Promise<string[]> {
  if (!rootHandle) return []
  const parts = dir ? dir.replace(/^\/+/, '').split('/').filter(Boolean) : []
  let handle: FileSystemDirectoryHandle = rootHandle
  for (const part of parts) {
    try {
      handle = await handle.getDirectoryHandle(part)
    } catch {
      return []
    }
  }
  const names: string[] = []
  for await (const [name] of (handle as any).entries()) {
    names.push(name)
  }
  return names.sort()
}

async function fsExists(path: string): Promise<boolean> {
  const content = await fsRead(path)
  return content !== null
}

async function fsMkdir(path: string): Promise<boolean> {
  if (!rootHandle) return false
  const parts = path.replace(/^\/+/, '').split('/').filter(Boolean)
  let dir = rootHandle
  for (const part of parts) {
    try {
      dir = await dir.getDirectoryHandle(part, { create: true })
    } catch {
      return false
    }
  }
  return true
}

async function fsRmdir(path: string, recursive: boolean): Promise<boolean> {
  const resolved = await resolvePathFromRoot(path)
  if (!resolved) return false
  try {
    await resolved.parent.removeEntry(resolved.name, { recursive })
    return true
  } catch {
    return false
  }
}

async function fsIsDirectory(path: string): Promise<boolean> {
  const dir = await resolveDirFromRoot(path)
  return dir !== null
}

async function fsRename(oldPath: string, newPath: string): Promise<boolean> {
  const ok = await fsCopy(oldPath, newPath)
  if (!ok) return false
  return fsRemove(oldPath)
}

async function fsCopy(src: string, dest: string): Promise<boolean> {
  if (!rootHandle) return false

  // Check if source is a directory
  const srcDir = await resolveDirFromRoot(src)
  if (srcDir) {
    // Ensure dest dir exists
    const destDir = await resolveDirFromRoot(dest)
    if (!destDir) {
      const destParts = dest.replace(/^\/+/, '').split('/').filter(Boolean)
      let d = rootHandle
      for (const part of destParts) {
        try {
          d = await d.getDirectoryHandle(part, { create: true })
        } catch {
          return false
        }
      }
    }
    // Copy children recursively
    const children: string[] = []
    for await (const [name] of (srcDir as any).entries()) {
      children.push(name)
    }
    for (const name of children) {
      const childSrc = src.endsWith('/') ? src + name : src + '/' + name
      const childDest = dest.endsWith('/') ? dest + name : dest + '/' + name
      const ok = await fsCopy(childSrc, childDest)
      if (!ok) return false
    }
    return true
  }

  // Source is a file
  const content = await fsRead(src)
  if (content === null) return false
  return fsWrite(dest, content)
}

// ---- Public API ----

export interface FileSystemOptions {
  namespace?: string
}

export function useFileSystem(options: FileSystemOptions = {}) {
  const { namespace = '' } = options

  function qualifyPath(path: string): string {
    return namespace ? `${namespace}:${path}` : path
  }
  function isSupported(): boolean {
    return 'showDirectoryPicker' in window
  }

  const isMounted = ref(false)
  const isApiSupported = ref(isSupported())

  async function mount(): Promise<boolean> {
    if (!isSupported()) return false
    try {
      rootHandle = await (window as any).showDirectoryPicker({ mode: 'readwrite' })
      isMounted.value = true
      return true
    } catch {
      return false
    }
  }

  function unmount() {
    rootHandle = null
    isMounted.value = false
  }

  async function read(path: string): Promise<string | null> {
    if (isSupported() && rootHandle) {
      const result = await fsRead(path)
      if (result !== null) return result
    }
    return dbRead(qualifyPath(path))
  }

  async function write(path: string, content: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsWrite(path, content)
      if (ok) return true
    }
    try {
      await dbWrite(qualifyPath(path), content)
      return true
    } catch {
      return false
    }
  }

  async function remove(path: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsRemove(path)
      if (ok) return true
    }
    try {
      return await dbRemove(qualifyPath(path))
    } catch {
      return false
    }
  }

  async function list(dir?: string): Promise<string[]> {
    if (isSupported() && rootHandle) {
      const result = await fsList(dir)
      if (result.length > 0) return result
    }
    return dbList(qualifyPath(dir ?? ''))
  }

  async function exists(path: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsExists(path)
      if (ok) return true
    }
    return dbExists(qualifyPath(path))
  }

  async function mkdir(path: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsMkdir(path)
      if (ok) return true
    }
    try {
      return await dbMkdir(qualifyPath(path))
    } catch {
      return false
    }
  }

  async function rmdir(path: string, recursive: boolean = false): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsRmdir(path, recursive)
      if (ok) return true
    }
    try {
      return await dbRmdir(qualifyPath(path), recursive)
    } catch {
      return false
    }
  }

  async function isDirectory(path: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      return fsIsDirectory(path)
    }
    return dbIsDirectory(qualifyPath(path))
  }

  async function rename(oldPath: string, newPath: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsRename(oldPath, newPath)
      if (ok) return true
    }
    try {
      return await dbRename(qualifyPath(oldPath), qualifyPath(newPath))
    } catch {
      return false
    }
  }

  async function copy(src: string, dest: string): Promise<boolean> {
    if (isSupported() && rootHandle) {
      const ok = await fsCopy(src, dest)
      if (ok) return true
    }
    try {
      return await dbCopy(qualifyPath(src), qualifyPath(dest))
    } catch {
      return false
    }
  }

  return {
    mount, unmount,
    read, write, remove, list, exists,
    mkdir, rmdir, isDirectory,
    rename, copy,
    isMounted, isApiSupported
  }
}
