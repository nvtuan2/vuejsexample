<template lang="html">

  <section class="home">
    <h1>home Component</h1>
    <!-- <input type="text" v-model="text" style="margin-bottom: 20px;"> -->
    <!-- <h2 style="color: blue;">{{title}} - {{likes}} - {{isPublished}} - {{commentIds}} - {{author}}</h2> -->
    <!-- <tuan></tuan> -->
    <!-- <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link> -->
    <!-- <h4><slot></slot></h4> -->
    <!-- <slot>default slot</slot> -->
    <!-- <slot name="item1"></slot>
    <slot name="item2"></slot>
    <slot name="item3"></slot> -->
    <!-- <slot>this is slot data</slot><br> -->
    <!-- <button type="submit">
      <slot name="item4">Submit</slot>
    </button> -->

  </section>

</template>

<script lang="js">
// import Vue from 'vue'
// import about from '@/components/about'

// Vue.component('tuan',about)
  export default  {
    name: 'home',
    // props: ['title', 'likes', 'isPublished', 'commentIds', 'author'],
    props: {
      title: String,
      likes: Number,
      isPublished: Boolean,
      commentIds: Array,
      author: Object
    },
    mounted() {

    },
    data() {
      return {
        text: '',
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

