<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>KABA UI</h1>
      <h2>Vue3 练习</h2>
      <p class="actions">
        <a href="https://www.github.com/h792309954">GitHub</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
  components:{Topnav}
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>