<template>
  <section class="z-desktop" @contextmenu.prevent="emit('contextmenu', $event)">
    <div class="z-desktop__icons">
      <slot name="icons" />
    </div>
    <div class="z-desktop__windows">
      <slot />
    </div>
    <slot name="overlay" />
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZDesktop' })

const emit = defineEmits<{
  contextmenu: [event: MouseEvent]
}>()
</script>
