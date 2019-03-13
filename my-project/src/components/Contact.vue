<template lang="html">

  <section class="contact">
    <h1>contact Component</h1>
    <input type="text" v-model="text" style="margin-bottom: 20px;">
  </section>

</template>

<script lang="js">
  export default  {
    name: 'contact',
    props: [],
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

<style scoped>

</style>

    <!-- <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link> -->
