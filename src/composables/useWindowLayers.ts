import { computed, ref } from 'vue'

export type WindowLayerEntry = {
  id: string
  setLayer?: (zIndex: number) => void
  setActive?: (active: boolean) => void
}

export type WindowLayerState = {
  id: string
  zIndex: number
  active: boolean
}

export type WindowLayerManagerOptions = {
  baseIndex?: number
}

export function createWindowLayerManager(options: WindowLayerManagerOptions = {}) {
  const baseIndex = options.baseIndex ?? 1
  const entries = ref<WindowLayerEntry[]>([])

  const layers = computed<WindowLayerState[]>(() =>
    entries.value.map((entry, index) => ({
      id: entry.id,
      zIndex: baseIndex + index,
      active: index === entries.value.length - 1
    }))
  )

  const activeId = computed(() => layers.value.find((layer) => layer.active)?.id)

  function sync() {
    entries.value.forEach((entry, index) => {
      entry.setLayer?.(baseIndex + index)
      entry.setActive?.(index === entries.value.length - 1)
    })
  }

  function register(entry: WindowLayerEntry) {
    if (entries.value.some((item) => item.id === entry.id)) {
      return
    }

    entries.value.push(entry)
    sync()
  }

  function unregister(id: string) {
    const index = entries.value.findIndex((entry) => entry.id === id)
    if (index === -1) {
      return
    }

    entries.value.splice(index, 1)
    sync()
  }

  function activate(id: string) {
    const index = entries.value.findIndex((entry) => entry.id === id)
    if (index === -1) {
      return
    }

    const [entry] = entries.value.splice(index, 1)
    entries.value.push(entry)
    sync()
  }

  function getLayer(id: string) {
    return layers.value.find((layer) => layer.id === id)
  }

  return {
    layers,
    activeId,
    register,
    unregister,
    activate,
    getLayer
  }
}

export const globalWindowLayerManager = createWindowLayerManager()

export function useWindowLayers(options?: WindowLayerManagerOptions) {
  return createWindowLayerManager(options)
}
