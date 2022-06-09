<template>
  <header class="headimg"><Header /></header>
  <div class="navbox">
    <ul class="list">
      <li>
        <router-link class="router" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="router" to="/main">Main</router-link>
      </li>
      <li>
        <router-link class="router" to="/list">List</router-link>
      </li>
      <li>
        <router-link class="router" to="/join">Join</router-link>
      </li>
      <li>
        <router-link class="router" to="/login">Login</router-link>
      </li>
      <br /><br /><br /><br />
    </ul>
  </div>

  <router-view />

  <footer class="footbox"><Footer mag="Footer for Your Vue.js" /></footer>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
 html,
body {
  width: 100wv;
  height: 100vh;
  position: relative;
}

body::after {
  width: 100%;
  height: 150%;
  content: "";
  background-image: url("./assets/back.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  opacity: 0.6;
}


.headimg {
  display: block;
  margin: 0 auto;
}

.navbox {
  margin: 10px 0;
}

.router {
  text-decoration: none;
  font-size: 18px;
  color: white;
}

.router:hover {
  color: white;
  font-size: 20px;
}

.list {
  background-color: rgba(26, 26, 26,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
}
li {
  display: inline-block;
  width: 150px;
}
.footbox {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: rgb(26, 26, 26);
  opacity: 0.8;
  z-index: -1;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
