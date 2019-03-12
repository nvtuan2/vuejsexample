import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import contact from '@/components/contact'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    },    {
      path: '/contact',
      // name: 'contact',
      component: contact
    },    {
      path: '/about',
      // name: 'about',
      component: about
    },    {
      path: '/home',
      // name: 'home',
      component: home
    }
  ]
})
