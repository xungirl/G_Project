<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      apiData: '',
      loading: false,
      error: ''
    }
  },
  methods: {
    async fetchData () {
      this.loading = true
      try {
        const response = await axios.get('/api') // 使用相对路径
        this.apiData = response.data
      } catch (error) {
        this.error = error.message || 'Error fetching data from API'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
