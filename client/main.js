import { createApp } from 'vue';
import App from './components/App.vue'; // Import the root component

// creating Vue application instance
const app = createApp(App);

// Mounting app to DOM
app.mount('#app');
