<template>
  <footer id="footer">
    <div id="running-time">Running safely <span id="time">{{ runningTime }}</span></div>
  </footer>
</template>

<script>
export default {
  name: 'TimeRunning',
  data () {
    return {
      startTime: new Date('2024-06-01T00:00:00'), // 设置开始时间
      runningTime: ''
    }
  },
  methods: {
    updateTime () {
      const currentTime = new Date()
      const diff = currentTime - this.startTime

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      this.runningTime = `${days}d ${hours}h ${minutes}min ${seconds}s`
    }
  },
  mounted () {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-family: 'Seymour One', sans-serif;
}

footer .link {
  margin: 0 5px;
}

#running-time {
  margin-top: 10px;
}
</style>
