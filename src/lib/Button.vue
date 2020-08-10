<template>
    <button class="kaba-btn" :class="`theme-${theme}`">
      <slot />
    </button>
</template>
<script lang='ts'>
export default {
  props:{
    theme: {
      type:String,
      default:'button'
    }
  },
  setup(props,context){

  }
}
</script>

<style lang="scss">

</style>