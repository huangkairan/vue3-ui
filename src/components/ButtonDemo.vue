<template>
  <div>
   <h1>demo 1</h1>
   <Button @click="onClick"
    @mouseover="onClick"
    @focus="onClick"
   >按钮</Button>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue'
export default {
  components:{
    Button
  },
  setup(){
    const onClick=()=>{
      console.log('hi')
    }
    return { onClick }
  }
}
</script>

<style lang='scss' scoped>

</style>