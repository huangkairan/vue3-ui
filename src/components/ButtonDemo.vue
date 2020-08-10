<template>
  <div>
    <h1>demo 1</h1>
    <div>
      <Button theme="button">按钮1</Button>
      <Button theme="link">按钮2</Button>
      <Button theme="text">按钮3</Button>
    </div>
  </div>
</template>

<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>

<style lang='scss' scoped>
</style>