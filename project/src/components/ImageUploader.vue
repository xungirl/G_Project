<template>
  <div class="uploader box">
    <el-upload
      class="upload-demo"
      :class="{ mobile: isMobile }"
      :action="uploadUrl"
      :on-success="handleSuccess"
      :on-error="handleError"
      :show-file-list="false"
      :drag="!isMobile">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        <span v-if="isMobile" class="mobile-icons">
          <i class="fas fa-camera icon-large" @click="openCamera"></i>
          <span class="or-text">or</span>
          <i class="fas fa-image icon-large" @click="openGallery"></i>
        </span>
        <span v-else>
          <i class="fas fa-file-upload icon-large"></i>
        </span>
      </div>
    </el-upload>
    <input type="file" id="cameraInput" accept="image/*;capture=camera" @change="handleFileChange" style="display: none;">
    <input type="file" id="galleryInput" accept="image/*" @change="handleFileChange" style="display: none;">
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
import axios from 'axios'

export default {
  data () {
    return {
      recognizedFormula: '',
      isMobile: false
    }
  },
  computed: {
    uploadUrl () {
      return 'http://47.100.211.167:8502/predict/'
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
    },
    checkDevice () {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      if ((/android/i.test(userAgent)) || ((/iPad|iPhone|iPod/.test(userAgent)) && !window.MSStream)) {
        this.isMobile = true
      }
    },
    openCamera () {
      document.getElementById('cameraInput').click()
    },
    openGallery () {
      document.getElementById('galleryInput').click()
    },
    handleFileChange (event) {
      const file = event.target.files[0]
      if (file) {
        const formData = new FormData()
        formData.append('file', file)
        this.uploadFile(formData)
      }
    },
    async uploadFile (formData) {
      try {
        const response = await axios.post(this.uploadUrl, formData)
        this.handleSuccess(response.data)
      } catch (error) {
        this.handleError(error)
      }
    }
  },
  mounted () {
    this.checkDevice()
  }
}
</script>

<style scoped>
.upload-demo {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
}

.upload-demo.mobile {
  width: 80%;
  max-width: 80%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: relative;
  transform-style: preserve-3d;
  border-radius: 2px;
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
}

.box::before {
  content: "";
  position: absolute;
  inset: -1px;
  background: conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700);
  filter: blur(5px);
  transform: translate3d(0px, 0px, -1px);
  border-radius: inherit;
  pointer-events: none;
}

@media (max-width: 768px) {
  .upload-demo {
    width: 90%;
    max-width: 90%;
    height: 120px;
  }
  .box {
    width: 70%;
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .upload-demo {
    width: 95%;
    max-width: 95%;
    height: 100px;
  }
  .box {
    width: 75%;
    max-width: 95%;
  }
}

.icon-large {
  font-size: 40px; /* 放大图标大小 */
}

.mobile-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.or-text {
  margin: 0 10px;
  font-size: 24px;
  line-height: 40px; /* 设置为与图标相同的高度 */
  color: #000;
  font-family: 'Merriweather', serif; /* 使用 Merriweather 字体 */
}
</style>
