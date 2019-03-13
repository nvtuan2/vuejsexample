import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'
import infor from '@/components/infor'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      components: {
        default: HelloWorld,
        a: home,
        b: about
      }
    },
    {
      path: '/home',
      // name: 'home',
      component: home
    },
    {
      path: '/about',
      // name: 'about',
      component: about
    },
    {
      path: '/infor',
      // name: 'infor',
      component: infor
    }
  ]
})
