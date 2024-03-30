<template>
  <div class="xx-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { provide, computed } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'XxCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emits('update:modelValue', newValue)
  }
})

const handleItemClick = (name: NameType) => {
  // 手风琴
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? '' : name]
    return
  }
  const index = activeNames.value.indexOf(name)
  if (index > -1) {
    activeNames.value.splice(index, 1)
  } else {
    activeNames.value.push(name)
  }
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
