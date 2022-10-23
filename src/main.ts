import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/style.css'
import '@/assets/cesium.css'

import App from '@/App.vue'
const app = createApp(App)

import allComponent from '@/components'

Object.keys(allComponent).forEach((key) => {
    app.component(key, allComponent[key])
})

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

import router from '@/router'
app.use(router)

import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

import useStore from '@/store'
app.config.globalProperties.$store = useStore()

import api from '@/api'
app.config.globalProperties.$api = api

app.use(ElementPlus)

app.mount('#app')
