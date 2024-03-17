<template>
  <div class="xx-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="xx-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <Transition name="fade">
      <div class="xx-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
        <slot />
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'XxCollapseItem'
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const handleClick = () => {
  if (props.disabled) {
    return
  }
  collapseContext?.handleItemClick(props.name)
}
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
</script>
