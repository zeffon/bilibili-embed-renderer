import { createApp } from 'vue'
import App from './App.vue'
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'

const app = createApp(App)
app.component('bilibili-embed', BilibiliEmbedRenderer)
app.mount('#app')
