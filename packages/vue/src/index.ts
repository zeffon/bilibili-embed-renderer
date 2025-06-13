import type { App } from 'vue'
import BilibiliEmbedRenderer from './core.vue'

// Plugin install function
const install = (app: App): void => {
  app.component('BilibiliEmbedRenderer', BilibiliEmbedRenderer)
}

// Export types
export type { BilibiliEmbedRendererProps } from './core.vue'

// Export component
export { BilibiliEmbedRenderer }

// Export plugin
export default {
  install,
  BilibiliEmbedRenderer
}
