<template>
  <div>
    <h1>Welcome to Erika's Whoop Stats!</h1>
    <h2>hello</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    // Fetch welcome message from backend
    fetchWelcomeMessage();
  },
  methods: {
    async fetchWelcomeMessage() {
      try {
        // Make GET request to the welcome route in backend
        const response = await fetch('/');

        // Extract welcome message from response
        const message = await response.text();
        
        // Update message in data
        this.message = message;
      } catch (error) {
        console.error('Error fetching welcome message:', error);
        this.message = 'Error fetching welcome message';
      }
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>
