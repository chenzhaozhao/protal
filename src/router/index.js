import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import JobHome from "../components/jobHome/jobHome.vue"
import businessed from "../components/expense/businessed.vue"
import business from "../components/expense/business.vue"
import request from "../components/expense/request.vue"
import set from "../components/expense/set.vue"
import activeUsers from "../components/expense/activeUsers.vue"
import newUsers from "../components/expense/newUsers.vue"
import error from "../components/error.vue"
// import RightDetail from "../components/Tabs.vue"









let routes=[
  {
    path: '/',
    redirect:"/home/jobHome"
  },
 
  { path: '/home/jobHome', component: JobHome },
  { path: '/expense/request', component: request },
  { path: '/expense/business', component: business },
  { path: '/expense/set', component: set },
  { path: '/expense/businessed', component: businessed },
  { path: '/expense/activeUsers', component: activeUsers },
  { path: '/expense/newUsers', component: newUsers },
   {path: '*',component:error},
]
export default new Router({
  routes: routes,
  mode:"hash"
})
