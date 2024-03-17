<script setup lang="ts">
import { ref } from 'vue'
import XxButton from './components/Button/Button.vue'
import XxCollapse from './components/Collapse/Collapse.vue'
import XxCollapseItem from './components/Collapse/CollapseItem.vue'
const activeNames = ref(['a'])
</script>

<template>
  <xx-button plain>Plain Button</xx-button>
  <xx-button round>Round Button</xx-button>
  <xx-button circle>XX</xx-button>
  <xx-button disabled>Disabled Button</xx-button>
  <br /><br />
  <xx-button type="primary">Primary</xx-button>
  <xx-button type="success">Success</xx-button>
  <xx-button type="info">Info</xx-button>
  <xx-button type="warning">Warning</xx-button>
  <xx-button type="danger">Danger</xx-button>
  <br /><br />
  <xx-button type="primary" plain>Primary</xx-button>
  <xx-button type="success" plain>Success</xx-button>
  <xx-button type="info" plain>Info</xx-button>
  <xx-button type="warning" plain>Warning</xx-button>
  <xx-button type="danger" plain>Danger</xx-button>
  <br /><br />
  <xx-button size="large">Large</xx-button>
  <xx-button size="small">Small</xx-button>

  <xx-collapse v-model="activeNames" accordion>
    <xx-collapse-item name="a">
      <template #title>
        <h1>this is aaa title</h1>
      </template>
      this is aaa content
    </xx-collapse-item>
    <xx-collapse-item name="b" title="this is bbb title"> this is bbb content </xx-collapse-item>
    <xx-collapse-item name="c" title="this is ccc title" disabled>
      this is ccc content
    </xx-collapse-item>
  </xx-collapse>
  {{ activeNames }}
</template>
