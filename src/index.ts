import type { App, Plugin } from 'vue'
import './styles/index.css'

import ZButton from './components/button/ZButton.vue'
import ZCheckbox from './components/checkbox/ZCheckbox.vue'
import ZCodeBlock from './components/code-block/ZCodeBlock.vue'
import ZContextMenu from './components/context-menu/ZContextMenu.vue'
import ZDesktopIcon from './components/desktop-icon/ZDesktopIcon.vue'
import ZDialog from './components/dialog/ZDialog.vue'
import ZDropdown from './components/dropdown/ZDropdown.vue'
import ZIcon from './components/icon/ZIcon.vue'
import ZInput from './components/input/ZInput.vue'
import ZLayout from './components/layout/ZLayout.vue'
import ZList from './components/list/ZList.vue'
import ZMenu from './components/menu/ZMenu.vue'
import ZProgress from './components/progress/ZProgress.vue'
import ZRadio from './components/radio/ZRadio.vue'
import ZSearchBox from './components/search-box/ZSearchBox.vue'
import ZSelect from './components/select/ZSelect.vue'
import ZSlider from './components/slider/ZSlider.vue'
import ZStatusBar from './components/status-bar/ZStatusBar.vue'
import ZSwitch from './components/switch/ZSwitch.vue'
import ZTabs from './components/tabs/ZTabs.vue'
import ZTextarea from './components/textarea/ZTextarea.vue'
import ZToast from './components/toast/ZToast.vue'
import ZToastContainer from './components/toast/ZToastContainer.vue'
import ZToolbar from './components/toolbar/ZToolbar.vue'
import ZTooltip from './components/tooltip/ZTooltip.vue'
import ZTree from './components/tree/ZTree.vue'
import ZWindow from './components/window/ZWindow.vue'
import { iconNames } from './components/icon/icons'
export type { ContextMenuItem } from './components/context-menu/ZContextMenu.vue'
export type { IconName } from './components/icon/icons'
export type { ListItem } from './components/list/ZList.vue'
export type { MenuItem } from './components/menu/ZMenu.vue'
export type { SelectOption } from './components/select/ZSelect.vue'
export type { SelectGroup } from './components/select/ZSelect.vue'
export type { TabItem } from './components/tabs/ZTabs.vue'
export type { TreeItem } from './components/tree/ZTree.vue'
export type { ManagedWindow } from './composables/useWindowManager'
export type { SearchItem } from './components/search-box/ZSearchBox.vue'
export { useWindowManager } from './composables/useWindowManager'
export { useToast } from './composables/useToast'
export type { ToastOptions } from './composables/useToast'
export { globalWindowLayerManager, createWindowLayerManager, useWindowLayers } from './composables/useWindowLayers'
export { generateWindowId } from './composables/useWindowId'
export { useFileSystem } from './composables/useFileSystem'
export type { FileSystemOptions } from './composables/useFileSystem'


const components = [
  ZButton,
  ZCheckbox,
  ZCodeBlock,
  ZContextMenu,
  ZDesktopIcon,
  ZDialog,
  ZDropdown,
  ZIcon,
  ZInput,
  ZLayout,
  ZList,
  ZMenu,
  ZProgress,
  ZRadio,
  ZSearchBox,
  ZSelect,
  ZSlider,
  ZStatusBar,
  ZSwitch,
  ZTabs,
  ZTextarea,
  ZToast,
  ZToastContainer,
  ZToolbar,
  ZTooltip,
  ZTree,
  ZWindow
]

export {
  iconNames,
  ZButton,
  ZCheckbox,
  ZCodeBlock,
  ZContextMenu,
  ZDesktopIcon,
  ZDialog,
  ZDropdown,
  ZIcon,
  ZInput,
  ZLayout,
  ZList,
  ZMenu,
  ZProgress,
  ZRadio,
  ZSearchBox,
  ZSelect,
  ZSlider,
  ZStatusBar,
  ZSwitch,
  ZTabs,
  ZTextarea,
  ZToast,
  ZToastContainer,
  ZToolbar,
  ZTooltip,
  ZTree,
  ZWindow
}

const ZijidUI: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name as string, component)
    })
  }
}

export default ZijidUI
