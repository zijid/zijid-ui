import { computed, ref } from 'vue'
import type { IconName } from '../components/icon/icons'
import { globalWindowLayerManager, type WindowLayerEntry } from './useWindowLayers'

export type ManagedWindow = {
  id: string
  title: string
  icon?: IconName
  visible: boolean
  minimized: boolean
  maximized: boolean
  active: boolean
  zIndex: number
  x: number
  y: number
}

export function useWindowManager(initialWindows: Array<Partial<ManagedWindow> & { id: string; title: string }> = []) {
  const layerEntries = new Map<string, WindowLayerEntry>()

  function createLayerEntry(win: ManagedWindow): WindowLayerEntry {
    return {
      id: win.id,
      setLayer(zIndex: number) {
        win.zIndex = zIndex
      },
      setActive(active: boolean) {
        win.active = active
      }
    }
  }

  const windows = ref<ManagedWindow[]>(
    initialWindows.map((item, index) => {
      const win = {
        icon: 'window' as const,
        visible: false,
        minimized: false,
        maximized: false,
        active: false,
        zIndex: 0,
        x: index * 28,
        y: index * 28,
        ...item
      }
      layerEntries.set(win.id, createLayerEntry(win))
      return win
    })
  )

  const taskbarWindows = computed(() => windows.value.filter((item) => item.visible))

  function getWindow(id: string) {
    return windows.value.find((item) => item.id === id)
  }

  function activate(id: string) {
    const target = getWindow(id)
    if (!target) return
    target.visible = true
    target.minimized = false
    globalWindowLayerManager.activate(id)
  }

  function open(id: string) {
    const target = getWindow(id)
    if (!target) return
    const entry = layerEntries.get(id)
    if (entry) {
      globalWindowLayerManager.register(entry)
    }
    activate(id)
  }

  function close(id: string) {
    const target = getWindow(id)
    if (!target) return
    globalWindowLayerManager.unregister(id)
    target.visible = false
    target.active = false
  }

  function minimize(id: string) {
    const target = getWindow(id)
    if (!target) return
    target.minimized = true
    target.active = false
  }

  function toggleMaximize(id: string, value?: boolean) {
    const target = getWindow(id)
    if (!target) return
    target.maximized = value ?? !target.maximized
    activate(id)
  }

  function move(id: string, position: { x: number; y: number }) {
    const target = getWindow(id)
    if (!target) return
    target.x = position.x
    target.y = position.y
  }

  return {
    windows,
    taskbarWindows,
    getWindow,
    open,
    close,
    minimize,
    activate,
    toggleMaximize,
    move
  }
}
