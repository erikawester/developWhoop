<template>
    <div class="welcome-container">
        <h1>Welcome to Your Customized Whoop Metrics</h1>
      <button @click="startOAuth">Login with WHOOP</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startOAuth() {
        // This redirects the user to the backend route that initiates the OAuth flow
        window.location.href = 'http://localhost:3000/authorize';
      },
    },
  }
  </script>

<style scoped>
/* center and style button */
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-color: #121212; /* Dark background */
}

button {
  background-color: #050605; /* WHOOP green */
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: white;
  color: black;
}

h1 {
  font-family: 'Montserrat', sans-serif; 
  margin-bottom: 20px; /* Space between h1 and button */
}
</style>