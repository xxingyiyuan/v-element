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
import type { CollapseItemData, NameType } from './types.ts'
import { ref } from 'vue'
defineProps<{
  collapseData: CollapseItemData[]
  accordion?: boolean
}>()

const activeNames = ref<NameType[]>([])
</script>
