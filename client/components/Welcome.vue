<template>
    <div id="welcome-container">
      <h1>Welcome to Your Customized Whoop Metrics</h1>
      <button @click="startOAuth">Login with WHOOP</button>
    </div>
  </template>
  
<script>
import {BACKEND_URL} from '../../server/config'

  export default {
    methods: {
      startOAuth() {
        // Redirect user to the backend route to initiate the OAuth flow
        window.location.href = `${BACKEND_URL}`;
      }
    }
  }
  </script>
  

<style scoped>

#welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-color: #121212; 
}

button {
  background-color: #050605; 
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