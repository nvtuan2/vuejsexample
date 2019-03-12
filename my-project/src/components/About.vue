<template lang="html">

  <section class="about">
    <h1>about Component</h1>
    <!-- <contact></contact> -->
    <!-- <pattinson></pattinson> -->
    <!-- <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link> -->
  </section>

</template>

<script lang="js">
// import Vue from 'vue'
import contact from '@/components/contact'
// Vue.component('pattinson',contact)
  export default  {
    name: 'about',
    props: [],
    components: {
      contact
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>
