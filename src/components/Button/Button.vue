<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
defineOptions({
  name: 'XxButton'
})
const _ref = ref<HTMLElement>()
defineExpose({
  ref: _ref
})
</script>
<template>
  <button
    ref="_ref"
    class="xx-button"
    :class="{
      [`xx-button--${type}`]: type,
      [`xx-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<style>
.xx-button {
  background-color: var(--xx-color-primary);
}
</style>
