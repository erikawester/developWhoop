<template>
    <div id="metrics-container">
      <h1>Metrics and Stats</h1>
      <p>All Whoop Metrics go here</p>

    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Fetching metrics logic will go here
    }
  }
  </script>
  
  <style scoped>
 #metrics-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 18px;
  color: #666;
}

.graph-container {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}
  </style>
  
  