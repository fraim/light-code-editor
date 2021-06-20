import {createApp} from 'vue'

import './style/index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)

app.mount('#app')
