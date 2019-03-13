<template>
  <div id="app">
    <!-- <br><img src="./assets/logo.png"> -->
    <!-- <home></home>
    <button type="button" @click="count++">You click me {{count}} times</button>
    <h2>Name: {{name}}</h2>
    <p :id="tagid" v-html="rawdata"></p>
    <input type="text" v-model="name">
    <br>
    <button type="submit" :disabled="!isButtonDisable" @click="reset">Submit</button>
    <br> -->
    <!-- <img :src="imageLink"> -->
    <!-- <div :class="[tuan, nguyen]">
      <p :style="{fontSize:fontSize, color:color}">{{getCount*2 + 3}}</p>
      <p :style="{fontSize:fontSize, color:color}">class and style binding</p>
    </div> -->
    <!-- <div :class="classObject">
      <h2 v-if="show" :style="{fontSize:fontSize, color:color}">this is v-if using</h2>
      <h2 v-show="show" :style="{fontSize:fontSize, color:color}">this is v-else using</h2>
    </div> -->
    <!-- <div>
      <br>
      <button type="button" @click="toggle">Toggle</button>
    </div>
    <div>
      <ol>
        <li v-for="(item, index) in fruits" :key="item.id">{{index}} {{item.id}} - {{item.name}}</li>
      </ol>
    </div> -->
    <router-view/>
    <nav>
     <router-link to="/">HelloWorld</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    </nav>
    <!-- <div>
      <input type="text" @input="changeText">
    </div>
    <div>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{message}}</p>
      <br>
      <input type="checkbox" id="checkbox" v-model="check">
      <label for="checkbox">{{check}}</label>
    </div>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Jack</label>
      <p>checked names: {{checkedNames}}</p>
    </div>
    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <p>Picked: {{picked}}</p>
    </div> -->
    <!-- <div>
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option>Bike</option>
        <option>Car</option>
        <option>Motor</option>
        <option>Bus</option>
        <option>Truck</option>
      </select>
      <p>
        <span>Selected: {{selected}}</span>
      </p>
    </div>
    <div>
      <select v-model="select">
        <option v-for="item in fruits" :key="item.id" :value="item.name">{{item.id}}</option>
      </select>
      <span>Select: {{select}}</span>
    </div>
    <div>
      <input v-model.lazy="text">
      <h2>Text: {{text}}</h2>
      <br>
      <input v-model.number="count">
      <h2>Number: {{count*5}}</h2>
    </div>
    <div>
      <blog-post title="study VueJS" :likes="500" :isPublished="true" :commentIds="[100, 200, 300]" :author="{name: 'Pattinson Nguyen', company: 'CMC Global'}"></blog-post>
      <blog-post>
        <p slot="item1">Toi la tuan, nguyen van tuan</p>
        <h1 slot="item2">this is behind slot</h1>
        <h1 slot="item3">this is behind slot</h1>
        <button slot="item4"></button>
      </blog-post>
    </div> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Vue from "vue";
import home from "@/components/home"
import about from "@/components/about"
import contact from "@/components/contact"

Vue.component("blog-post", home);

export default {
  name: "App",
  data() {
    return {
      count: 0,
      name: "Pattinson Nguyen",
      show: true,
      message: "",
      check: false,
      picked: "",
      select: "apple",
      selected: "",
      checkedNames: [],
      text: "",
      rawdata: '<h1 style="color: blue;">toi la Nguyen</h1>',
      isButtonDisable: true,
      tagid: "tagid",
      imageLink:
        "https://vietpeacetravel.com/wp-content/uploads/2018/06/19420657_1863021330684916_6080505200699911418_n.jpg",
      classObject: {
        alert: true,
        "alert-success": true
      },
      tuan: "alert",
      nguyen: "alert-primary",
      fontSize: "50px",
      color: "red",
      fruits: [
        { id: 1, name: "apple" },
        { id: 2, name: "grape" },
        { id: 3, name: "orange" },
        { id: 4, name: "lemom" },
        { id: 5, name: "mango" }
      ]
    };
  },
  methods: {
    reset: function() {
      document.getElementById(this.tagid).innerHTML = "Hello VueJS";
    },
    toggle: function() {
      this.show = !this.show;
    },
    changeText: function(event) {
      this.name = event.target.value;
    }
  },
  computed: {
    getCount: function() {
      return this.count + 2;
    }
  },
  watch: {
    count: function() {
      console.log("count has been changed!");
    }
  }
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
