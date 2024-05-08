import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueFlex from 'vue-flex'   //Primero lo instalo con npm install vue-flex
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).use(vueFlex).mount('#app')
