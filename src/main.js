import {createApp} from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'monaco-editor/min/vs/editor/editor.main.css'
import './style/index.scss'

import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)

app.mount('#app')
