<template>
  <div v-if="modelValue" class="z-dialog">
    <div class="z-dialog__backdrop" @click="closeOnBackdrop && emit('update:modelValue', false)"></div>
    <ZWindow class="z-dialog__window" :title="title" :draggable="false" @close="emit('update:modelValue', false)">
      <div class="z-dialog__body">
        <slot />
      </div>
      <footer class="z-dialog__footer">
        <slot name="footer">
          <ZButton @click="emit('update:modelValue', false)">取消</ZButton>
          <ZButton variant="primary" @click="emit('confirm')">确定</ZButton>
        </slot>
      </footer>
    </ZWindow>
  </div>
</template>

<script setup lang="ts">
import ZButton from '../button/ZButton.vue'
import ZWindow from '../window/ZWindow.vue'

defineOptions({ name: 'ZDialog' })

withDefaults(
  defineProps<{
    modelValue?: boolean
    title?: string
    closeOnBackdrop?: boolean
  }>(),
  {
    title: '提示',
    closeOnBackdrop: true
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
}>()
</script>
