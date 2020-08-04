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
      {path:'switch',component:()=>import('./Components/SwitchDemo.vue')}
    ]
  }]
})