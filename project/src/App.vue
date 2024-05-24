<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <ApiTest />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ApiTest from './components/ApiTest.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    ApiTest // 注册 ApiTest 组件
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

