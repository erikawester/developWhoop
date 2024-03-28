import { createApp } from 'vue';
import App from '../client/components/App.vue';
import router from '../client/router/router'; // Adjust the path to your router configuration

createApp(App).use(router).mount('#app');

