// import './assets/main.css'
//creating an instance
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//instance of an app
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
