<template>
  <button
    :class="{
      [`xx-button--${type}`]: type,
      [`xx-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
  >
    <span>
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
import type { ButtonProps } from './types'
defineProps<ButtonProps>()
defineOptions({
  name: 'XxButton'
})
</script>
