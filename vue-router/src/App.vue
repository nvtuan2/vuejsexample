<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <router-link to="/">HelloWorld</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/infor">Infor</router-link>
    </nav>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
    <!-- <router-view name="c"></router-view> -->
    <!-- <keep-alive>
    </keep-alive>-->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
