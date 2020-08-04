import  { createWebHashHistory ,createRouter } from 'vue-router'

import Home from './views/Home.vue'

const history = createWebHashHistory()
export  const router = createRouter({
  history,
  routes:[
    {
    path:'/',component: Home
  },
  {
    path:'/doc',component:()=>import('./views/Doc.vue'),
    children:[
      {path:'',component:()=>import('./Components/DocDemo.vue')},
      {path:'switch',component:()=>import('./Components/SwitchDemo.vue')},
      {path:'button',component:()=>import('./Components/ButtonDemo.vue')},
      {path:'dialog',component:()=>import('./Components/DialogDemo.vue')},
      {path:'tabs',component:()=>import('./Components/TabsDemo.vue')}
    ]
  }]
})