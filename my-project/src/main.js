// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import about from '@/components/about'
import home from '@/components/home'
import contact from '@/components/contact'

Vue.config.productionTip = false
Vue.component('bind-component',about)
Vue.component('home',home)
// Vue.component('contact', contact)

Vue.component('slot-define', {
  props: ['url'],
  template: `<h2><a :href="url"><slot></slot></a></h2>`
})

Vue.component('slot-example', {
  template: `<div>
              <h1>This is Tuan</h1>
              <slot name="slot1"></slot>
              <slot name="slot2">this is slot default content</slot>
              <slot>this is slot default content</slot>
            </div>`
})

Vue.component('test-computed', {
  data: function() {
    return {
      textStr: 'This is VueJS example',
      textAft: '',
      imageLink: 'https://images-na.ssl-images-amazon.com/images/I/51e0IN0EqZL._SX425_.jpg',
      show: false,
      fullname: this.firstName + ' ' +this.lastName,
    }
  },
  props: {
    sendText: String,
    age: Number,
    lastName: String,
    firstName: String,
    isMarried: Boolean,
    url: String
  },
  computed: {
    lowerText: function() {
      return this.firstName.toLowerCase();
    },
    reverseString: function() {
      return this.textStr.split('').reverse().join('');
    }
  },
  methods: {
    reverseText: function() {
      this.textAft = this.textStr.split('').reverse().join('');
      return this.textAft;
    }
  },

  watch: {
    textAft: function() {
      this.show = true;
      console.log('the text has changed')
    }
  },

  template:  `<div>
                <h2>{{lowerText}}</h2>
                <h2>{{fullname}}</h2>
                <h2 style="color: green">{{sendText}} {{firstName}} {{lastName}} {{age}} - getMarried: {{isMarried}}</h2>
                <h2>{{textStr}}</h2>
                <h2>{{textAft}}</h2>
                <br><img v-if="show" :src="imageLink">
                <div style="margin-top: 30px">
                  <button class="btn btn-success" @click="reverseText">Reverse String</button>
                </div>
                <h2>{{reverseString}}</h2>
              </div>`
})

var data_o = {a : 1};

var vm = new Vue({
  el: '#example',
  data: {
    count: 0,
    text1: "This is text one",
    text2: "This is text two ",
    propsdata: {
      sendText: 'Hello',
      fname: 'Pattinson',
      lname: 'Nguyen',
      isMarried: true,
    },
    classObj: {
      btn: 'btn',
      'btn-danger': 'btn-danger',
    },
    btn: 'btn',
    'btn-success': 'btn-success'
  },
  components: {contact},
})


// console.log(vm.$data === data_o);
// console.log(vm.$el === document.getElementById('example'));
vm.$watch('a', function(newValue, oldValue) {
  // console.log('oldValue = ' + oldValue + ' --- ' + 'newValue = ' + newValue);
})

data_o.a = 5;


var vm1 = new Vue({
  el: '#data',
  data: {
    count: 0,
    firstName: 'Tuan',
    lastName: 'Nguyen',
    count: 0,
    rawHTML: '<p style="color: blue;">this is a paragraph</p>',
    imageLink: 'http://rolandbyrd.co/wp-content/uploads/2015/03/Life-is-a-Journey.png',
    url: "http://www.youtube.com",
    show: false,
    foods: [
      {name: 'Hamburger', price: '$10'},
      {name: 'Italian Noodle', price: '$17'},
      {name: 'Kimchi', price: '$5'},
      {name: 'Pho', price: '$10'},
      {name: 'Banh Chung', price: '$15'},
    ]
  },
  beforeCreate: function() {
    console.log('beforeCreated');
  },
  created: function() {
    console.log('created');
    console.log('firstName = ' + this.firstName);
    console.log('lastName = ' + this.lastName);
    // console.log(this.foods);
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  },
})
var food = {name: 'banh mi kep cha', price: '0 dong'}
vm1.foods.push(food)
var tuan = vm1.foods;
for(var i = 0; i < tuan.length; i++) {
  console.log(tuan[i].name);
}


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   data: {
//     age: 18
//   },
//   router,
//   components: { App },
//   // template: '<App/>',
//   beforeCreate: function() {
//     console.log('beforeCreated');
//   },
//   created: function() {
//     console.log('created');
//     console.log('age = ' + this.age);
//   },
//   beforeMount: function() {
//     console.log('beforeMount');
//   },
//   mounted: function() {
//     console.log('mounted');
//   },
//   beforeUpdate: function() {
//     console.log('beforeUpdate');
//   },
//   updated: function() {
//     console.log('updated');
//   },
//   beforeDestroy: function() {
//     console.log('beforeDestroy');
//   },
//   destroyed: function() {
//     console.log('destroyed');
//   },
// })
