<template>
    <div>
      <button @click="selectMode('image')">图片识别</button>
      <button @click="selectMode('handwriting')">手写识别</button>
    </div>
  </template>

<script>
export default {
  methods: {
    selectMode (mode) {
      this.$emit('mode-selected', mode)
    }
  }
}
</script>

  <style scoped>
  button {
    margin: 5px;
    padding: 10px;
  }
  </style>
