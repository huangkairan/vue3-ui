import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import  { createWebHashHistory ,createRouter } from 'vue-router'

import Home from './views/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {
    path:'/',component: Home
  },
  {
    path:'/doc',component:()=>import('./views/Doc.vue')
  }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
