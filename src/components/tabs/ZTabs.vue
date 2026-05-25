<template>
  <section class="z-tabs">
    <div class="z-tabs__nav" role="tablist">
      <button
        v-for="item in items"
        :key="item.value"
        class="z-tabs__tab"
        :class="{ 'z-tabs__tab--active': item.value === modelValue }"
        type="button"
        role="tab"
        @click="emit('update:modelValue', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <div class="z-tabs__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZTabs' })

export type TabItem = {
  label: string
  value: string
}

defineProps<{
  modelValue: string
  items: TabItem[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
