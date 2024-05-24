<template>
  <div>
    <h1>Vue Page with API Integration</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <h2>Data from API:</h2>
      <p>{{ apiData }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiData: '',
      loading: false,
      error: ''
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get('/api'); // 使用相对路径
        this.apiData = response.data;
      } catch (error) {
        this.error = error.message || 'Error fetching data from API';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
