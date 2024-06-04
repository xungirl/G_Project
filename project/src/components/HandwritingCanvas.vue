<template>
  <div class="uploader box">
    <canvas ref="handwritingCanvas" class="canvas"></canvas>
    <el-button type="primary" @click="submitHandwriting">提交</el-button>
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
    submitHandwriting () {
      const canvas = this.$refs.handwritingCanvas
      canvas.toBlob((blob) => {
        const formData = new FormData()
        formData.append('file', blob, 'handwriting.jpg')
        this.uploadFile(formData)
      })
    },
    async uploadFile (formData) {
      try {
        const response = await axios.post(this.uploadUrl, formData)
        this.handleSuccess(response.data)
      } catch (error) {
        this.handleError(error)
      }
    },
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
    initCanvas () {
      const canvas = this.$refs.handwritingCanvas
      const ctx = canvas.getContext('2d')
      let isDrawing = false

      const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect()
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        }
      }

      const getTouchPos = (canvas, touch) => {
        const rect = canvas.getBoundingClientRect()
        return {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top
        }
      }

      canvas.addEventListener('mousedown', () => {
        isDrawing = true
      })

      canvas.addEventListener('mouseup', () => {
        isDrawing = false
        ctx.beginPath()
      })

      canvas.addEventListener('mousemove', (event) => {
        if (!isDrawing) return

        const pos = getMousePos(canvas, event)

        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = '#000000'

        ctx.lineTo(pos.x, pos.y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
      })

      canvas.addEventListener('touchstart', (event) => {
        isDrawing = true
        const touch = event.touches[0]
        const pos = getTouchPos(canvas, touch)

        ctx.moveTo(pos.x, pos.y)
        event.preventDefault()
      })

      canvas.addEventListener('touchend', () => {
        isDrawing = false
        ctx.beginPath()
      })

      canvas.addEventListener('touchmove', (event) => {
        if (!isDrawing) return

        const touch = event.touches[0]
        const pos = getTouchPos(canvas, touch)

        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = '#000000'

        ctx.lineTo(pos.x, pos.y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
        event.preventDefault()
      })
    }
  },
  mounted () {
    this.initCanvas()
    this.checkDevice()
  }
}
</script>

<style scoped>
.canvas {
  display: block;
  width: 100%;  /* 确保 canvas 填充父容器的宽度 */
  height: 300px; /* 设置手写板的高度 */
  border: 1px dashed lightblue;  /* 定义手写板区域的边框 */
}

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
