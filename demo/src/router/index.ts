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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
