<template>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="image-container" style="text-align: center;line-height: 0;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" alt="VS Code" width="100" height="auto" style="vertical-align: middle;"/>
    <scan><i class="fa-solid fa-plus"></i></scan>
    <img src="https://tuchuang-1312256370.cos.ap-shanghai.myqcloud.com/Icon_%E5%85%AC%E5%BC%8F%E5%AE%9A%E4%B9%89.svg" alt="VS Code" width="80" height="auto" style="vertical-align: middle;"/>
</div>
  <ApiTest />
  <div id="app">
    <image-uploader></image-uploader>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ApiTest from './components/ApiTest.vue'
import ImageUploader from './components/ImageUploader.vue'
// import IconGrid from './components/IconGrid.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ApiTest, // 注册 ApiTest 组件
    ImageUploader
    // IconGrid
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
