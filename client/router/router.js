import { createRouter, createWebHistory } from 'vue-router';
import Metrics from '../components/Metrics.vue'; 
import Welcome from '../components/Welcome.vue'; 

const routes = [
    { path: '/', component: Welcome },
    { path: '/metrics', component: Metrics },
];

const router = createRouter({
    //use default base URL for now
  history: createWebHistory(''),
  routes,
});


export default router;
