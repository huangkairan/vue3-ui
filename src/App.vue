<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { ref, provide } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth  
    const asideVisible = ref(width<=500 ? false : true)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      if(width<=500){
        asideVisible.value = false
      }
    })
  }
}
</script>
