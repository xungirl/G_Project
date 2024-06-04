<template>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="image-container" style="text-align: center;line-height: 0;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" alt="VS Code" width="100" height="auto" style="vertical-align: middle;"/>
    <scan><i class="fa-solid fa-plus"></i></scan>
    <img src="https://tuchuang-1312256370.cos.ap-shanghai.myqcloud.com/Icon_%E5%85%AC%E5%BC%8F%E5%AE%9A%E4%B9%89.svg" alt="VS Code" width="80" height="auto" style="vertical-align: middle;"/>
</div>

<mode-selector @mode-selected="mode = $event"></mode-selector>

<div v-if="mode === 'image'">
  <image-uploader />
</div>

<div v-if="mode === 'handwriting'">
  <handwriting-canvas />
</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ApiTest from './components/ApiTest.vue'
import ImageUploader from './components/ImageUploader.vue'
import ModeSelector from './components/ModeSelector.vue'
import HandwritingCanvas from './components/HandwritingCanvas.vue'

export default {
  name: 'App',
  components: {
    // ApiTest,
    ImageUploader,
    ModeSelector,
    HandwritingCanvas
  },
  data () {
    return {
      mode: 'image' // 默认是图片识别模式
    }
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
.image-container {
  margin-bottom: 20px;
}
button {
  margin: 5px;
  padding: 10px;
}
canvas {
  display: block;
  margin: 20px auto;
  /*border: 1px solid #000;*/
}
</style>
