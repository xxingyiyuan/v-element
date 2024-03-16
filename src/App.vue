<script setup lang="ts">
import XxButton from './components/Button/Button.vue'
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
</template>
