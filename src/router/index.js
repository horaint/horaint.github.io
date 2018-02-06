import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import vueResource from 'vue-resource'
Vue.use(vueResource)
import myHome from '@/components/myHome'
import myMove from '@/components/myMove'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myHome',
      component: myHome
    },
    {
      path: '/myMove',
      name: 'myMove',
      component: myMove
    }
  ]
})
