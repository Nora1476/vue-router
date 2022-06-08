<template>
<img class="backimg" src="" alt="back"/>
<header class="headimg" ><Header/></header>
    <div class="nav">
      <ul class="list">
        <li>
          <router-link class="router" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="router" to="/portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link class="router" to="/join">Join</router-link>
        </li>
        <li>
          <router-link class="router" to="/login">Login</router-link>
        </li>
        <li>
          <router-link class="router" to="/about">About</router-link>
        </li>
        <br><br><br><br>
      </ul>
    </div> 
     <router-view/>

 <footer id="foot"><Footer mag="Footer for Your Vue.js"/></footer>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Footer,
  }
}
</script>

<style>

.headimg{
  display: block;
  margin: 0 auto;
}

.nav{
  margin:10px 0;
}

.router{
  text-decoration: none;
  font-size: 18px;
  color: white;
}

.router:hover{
  font-size: 20px;
}

.list {
  background-color: rgb(44, 62, 80);
  display: flex;
  justify-content: center;
  align-items: center;
}

ul{
  list-style: none;
}
li{
  display: inline-block;
  width:150px;
  
}
#foot {
  width:100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: rgb(44, 62, 80);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.kenburns-top {
	-webkit-animation: kenburns-top 5s ease-out both;
	animation: kenburns-top 5s ease-out both;
}

@-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}
@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}

</style>
