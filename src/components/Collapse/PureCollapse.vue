<template>
  <xx-collapse v-model="activeNames" :accordion="accordion">
    <xx-collapse-item
      v-for="item in collapseData"
      :name="item.name"
      :title="item.title"
      :key="item.name"
      :disabled="item.disabled"
    >
      {{ item.content }}
    </xx-collapse-item>
  </xx-collapse>
</template>
<script setup lang="ts">
import XxCollapse from './Collapse.vue'
import XxCollapseItem from './CollapseItem.vue'
import type { CollapseItemData, CollapseEmits, NameType } from './types.ts'
import { computed } from 'vue'
const props = defineProps<{
  collapseData: CollapseItemData[]
  modelValue: NameType[]
  accordion?: boolean
}>()
const emits = defineEmits<CollapseEmits>()
const activeNames = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emits('update:modelValue', newValue)
  }
})
</script>
