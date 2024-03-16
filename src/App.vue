<script setup lang="ts">
import { onMounted, ref } from 'vue'
import XxButton from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
</script>

<template>
  <XxButton ref="buttonRef" type="primary" round size="large" disabled>button</XxButton>
  <h1>hello world</h1>
  <h2>hello world</h2>
  <h3>hello world</h3>
  <hr />
  <a>balabala</a>
</template>
