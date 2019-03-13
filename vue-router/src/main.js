// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

var vm = Vue.component('test-slot', {
  render: function (createElement) {
    return createElement('div', [
      createElement('h1', {style:"color: red"}, this.$slots.header),
      createElement('h1', {style:"color: blue"}, this.$slots.header),
      createElement('h1', {style:"color: green"}, this.$slots.default),
    ])
  }
  // template: `<div>
  //             <h1>This is Tuan</h1>
  //             <slot name="slot1"></slot>
  //             <slot name="slot2"></slot>
  //             <slot></slot>
  //           </div>`
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // components: { App },
  // template: '<App/>'
})
