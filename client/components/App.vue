<template>
    <div id="app">
      <Welcome/>
      <!-- Any other components or content you want to include in your app -->
    </div>
  </template>
  
  <script>
  import Welcome from './Welcome.vue'; // Adjust the path as necessary
  
  export default {
    components: {
      Welcome 
    }
  }
  </script>
  
  <style>
  #app {
    background-color: #121212; /* dark black background */
    color: white; /* light text for dark background */
    min-height: 100vh; /* full height */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
  }
  </style>
  
  