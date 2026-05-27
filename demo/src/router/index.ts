import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/window',
    name: 'Window',
    component: () => import('../views/WindowView.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/ButtonView.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../views/SelectView.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../views/CheckboxView.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/RadioView.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../views/SwitchView.vue')
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import('../views/TabsView.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/ProgressView.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import('../views/SliderView.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('../views/DialogView.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/IconView.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/LayoutDemo.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/MenuDemo.vue')
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: () => import('../views/DropdownDemo.vue')
  },
  {
    path: '/toolbar',
    name: 'Toolbar',
    component: () => import('../views/ToolbarDemo.vue')
  },
  {
    path: '/status-bar',
    name: 'StatusBar',
    component: () => import('../views/StatusBarDemo.vue')
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../views/ToastDemo.vue')
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import('../views/TooltipDemo.vue')
  },
  {
    path: '/context-menu',
    name: 'ContextMenu',
    component: () => import('../views/ContextMenuDemo.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/ListDemo.vue')
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('../views/TreeDemo.vue')
  },
  {
    path: '/search-box',
    name: 'SearchBox',
    component: () => import('../views/SearchBoxDemo.vue')
  },
  {
    path: '/textarea',
    name: 'Textarea',
    component: () => import('../views/TextareaDemo.vue')
  },
  {
    path: '/code-block',
    name: 'CodeBlock',
    component: () => import('../views/CodeBlockDemo.vue')
  },
  {
    path: '/desktop-icon',
    name: 'DesktopIcon',
    component: () => import('../views/DesktopIconDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
