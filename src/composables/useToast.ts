import { reactive } from 'vue'

export interface ToastOptions {
  title?: string
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
}

export interface ToastEntry extends ToastOptions {
  id: number
}

let nextId = 0

export function useToast() {
  const toasts = reactive<ToastEntry[]>([])

  function show(options: ToastOptions): number {
    const id = ++nextId
    const entry: ToastEntry = { ...options, id }
    toasts.push(entry)

    const duration = options.duration ?? 4000
    if (duration > 0) {
      setTimeout(() => close(id), duration)
    }

    return id
  }

  function close(id: number) {
    const idx = toasts.findIndex(t => t.id === id)
    if (idx !== -1) {
      toasts.splice(idx, 1)
    }
  }

  function clear() {
    toasts.splice(0, toasts.length)
  }

  return { toasts, show, close, clear }
}
