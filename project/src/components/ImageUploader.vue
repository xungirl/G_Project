<template>
  <div class="uploader">
    <el-upload
      class="upload-demo"
      drag
      action="http://47.100.211.167:8502/predict/"
      :on-success="handleSuccess"
      :on-error="handleError"
      :show-file-list="false">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">拖动文件到此处，或<em>点击上传</em></div>
    </el-upload>
    <div v-if="recognizedFormula">
      <el-card>
        <h3>Latex Formula:</h3>
        <p>{{ recognizedFormula }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  data () {
    return {
      recognizedFormula: ''
    }
  },
  methods: {
    handleSuccess (response) {
      this.recognizedFormula = response
      ElMessage.success('Upload successful!')
    },
    handleError (error) {
      console.error('Error uploading image:', error)
      ElMessage.error('Upload failed!')
    }
  }
}
</script>

<style>
.upload-demo {
  display: block;
  width: 400px;
  margin: 30px auto;
}
.el-upload {
  border: 2px dashed #3cbbc0;
  border-radius: 6px;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409eff;
}
</style>
