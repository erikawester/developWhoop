<!-- <template>
    <div>
      <h2>Recovery Metrics</h2>
      <div v-if="recoveryData">
        <p>Recovery Score: {{ recoveryData.score }}</p>
        <p>Heart Rate Variability (HRV): {{ recoveryData.hrv }}</p>
        <p>Resting Heart Rate (RHR): {{ recoveryData.rhr }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recoveryData: null
      };
    },
    async mounted() {
      try {
        // Assume backend provides recovery data via an API endpoint
        const response = await fetch('/api/recovery');
        const data = await response.json();
        this.recoveryData = data;
      } catch (error) {
        console.error('Error fetching recovery data:', error);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
   -->