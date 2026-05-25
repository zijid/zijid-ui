<template>
  <div v-if="visible" class="z-toast" :class="`z-toast--${type}`">
    <ZIcon :name="iconName" :size="18" />
    <div class="z-toast__content">
      <strong v-if="title">{{ title }}</strong>
      <span>{{ message }}</span>
    </div>
    <button type="button" @click="emit('update:visible', false)">
      <ZIcon name="close" :size="14" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ZIcon from '../icon/ZIcon.vue'

defineOptions({ name: 'ZToast' })

const props = withDefaults(
  defineProps<{
    visible?: boolean
    title?: string
    message: string
    type?: 'info' | 'success' | 'warning' | 'error'
  }>(),
  {
    visible: true,
    type: 'info'
  }
)

const emit = defineEmits<{ 'update:visible': [value: boolean] }>()
const iconName = computed(() => (props.type === 'success' ? 'check' : props.type === 'error' ? 'error' : props.type))
</script>
