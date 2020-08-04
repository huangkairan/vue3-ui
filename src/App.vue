<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { ref, provide } from 'vue'

export default {
  name: 'App',
  setup(){
    const asideVisible = ref(true)
    provide('asideValue',asideVisible)
  }
}
</script>
