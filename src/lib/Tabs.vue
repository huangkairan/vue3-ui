<template>
<div>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <component v-for="(c,index) in defaults" :key="index" :is='c' />
</div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs自标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    // console.log(titles)
    return {
      defaults,
      titles
    }
  }
}
</script>

<style>

</style>
