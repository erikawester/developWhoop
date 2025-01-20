import { createApp } from 'vue';
import App from '../client/components/App.vue';
import router from '../client/router/router'; 

createApp(App).use(router).mount('#app');

