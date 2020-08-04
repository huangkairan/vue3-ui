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
    const width = document.documentElement.clientWidth  
    const asideVisible = ref(width<=500 ? false : true)
    provide('asideValue',asideVisible)
  }
}
</script>
