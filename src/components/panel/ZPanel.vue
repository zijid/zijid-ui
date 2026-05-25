<template>
  <section class="z-panel">
    <header v-if="$slots.header || title" class="z-panel__header">
      <slot name="header">{{ title }}</slot>
    </header>
    <div class="z-panel__body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="z-panel__footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZPanel' })

defineProps<{
  title?: string
}>()
</script>
