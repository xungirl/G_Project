<template>
  <div class="container">
    <div :class="['option', { selected: selectedMode === 'image' }]" @click="selectMode('image')">
      <input type="radio" name="mode" v-model="selectedMode" value="image" />
      <span>Upload File</span>
    </div>
    <div :class="['option', { selected: selectedMode === 'handwriting' }]" @click="selectMode('handwriting')">
      <input type="radio" name="mode" v-model="selectedMode" value="handwriting" />
      <span>Hand Writing</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedMode: 'image'
    }
  },
  methods: {
    selectMode (mode) {
      this.selectedMode = mode
      this.$emit('mode-selected', mode)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.option {
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.option input[type="radio"] {
  margin-right: 10px;
  display: none;
}

.option.selected {
  border-color: lightblue;
}

.option.selected input[type="radio"] + span::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #409EFF;
  margin-right: 10px;
}

.option span {
  position: relative;
  padding-left: 20px;
}

.option span::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
}
</style>
