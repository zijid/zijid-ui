import { computed, ref } from 'vue'
import type { IconName } from '../components/icon/icons'

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

let seed = 2000

export function useWindowManager(initialWindows: Array<Partial<ManagedWindow> & { id: string; title: string }> = []) {
  const windows = ref<ManagedWindow[]>(
    initialWindows.map((item, index) => ({
      icon: 'window',
      visible: false,
      minimized: false,
      maximized: false,
      active: false,
      zIndex: ++seed,
      x: index * 28,
      y: index * 28,
      ...item
    }))
  )

  const taskbarWindows = computed(() => windows.value.filter((item) => item.visible))

  function getWindow(id: string) {
    return windows.value.find((item) => item.id === id)
  }

  function activate(id: string) {
    const target = getWindow(id)
    if (!target) return
    windows.value.forEach((item) => {
      item.active = item.id === id
    })
    target.visible = true
    target.minimized = false
    target.zIndex = ++seed
  }

  function open(id: string) {
    activate(id)
  }

  function close(id: string) {
    const target = getWindow(id)
    if (!target) return
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
