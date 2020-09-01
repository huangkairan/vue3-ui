<template>
<div class="dialog-overlay"></div>
<div class="dialog-wrapper">
  <header>标题</header>
  <main>
    <p>diyihang </p>
    <p>第二行</p>
  </main>
  <footer>
    <Button>OK</Button>
    <Button>Cancel</Button>
  </footer>
</div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: {
    Button
  }
}
</script>

<style lang='scss' scoped>

</style>
