<template>
  <span class="z-tooltip">
    <slot />
    <span class="z-tooltip__content" role="tooltip">{{ content }}</span>
  </span>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZTooltip' })

defineProps<{ content: string }>()
</script>
