import { App } from 'vue'
import BilibiliEmbedRenderer from './core.vue'

BilibiliEmbedRenderer.install = (app: App) => {
  app.component('bilibili-embed-renderer', BilibiliEmbedRenderer)
}

export default BilibiliEmbedRenderer
