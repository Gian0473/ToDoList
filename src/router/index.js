import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import comp_to_do_list from '../views/comp_to_do_list.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comp_to_do_list',
    name: 'comp_to_do_list',
    component: comp_to_do_list
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
