Language : [English](./README.md) | 简体中文

<h1 align="center">bilibili-embed-renderer</h1>

在 `React` 或者 `Vue` 中更加方便地使用哔哩哔哩的嵌入代码。

## 使用

### react 版本

1. 安装依赖

   ```sh
   $ yarn install react-bilibili-embed-renderer
   ```

2. 引入组件和样式

   ```ts
   import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
   import 'react-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'
   ```

3. 使用组件

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   ```

### Vue 版本

> vue 版本支持 vue2 和 vue3。

1. 安装依赖

   ```sh
   $ yarn install vue-bilibili-embed-renderer
   ```

2. 引入组件和样式

你可以单独使用组件或全局注册组件。

```ts
// 直接在vue文件引入使用
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'
import 'vue-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'

// 或者在`main.ts`全局注册该组件
import { createApp } from 'vue'
import App from './App.vue'
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'
import 'vue-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'

const app = createApp(App)
app.component('BilibiliEmbedRenderer', BilibiliEmbedRenderer)
app.mount('#app')
```

3. 使用组件

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   ```

## 参数

| 字段          | 是否必传 | 默认值  | 类型      | 描述                                                 |
| :------------ | -------- | ------- | --------- | ---------------------------------------------------- |
| `aid`         | true     |         | `String`  | 视频的 aid（可以在嵌入代码找到找到对应 aid）         |
| `width`       | false    | `480`   | `Number`  | 视频窗口的宽度                                       |
| `height`      | false    | `360`   | `Number`  | 视频窗口的高度                                       |
| `page`        | false    | `1`     | `Number`  | 视频集合中第几个视频 （可以在嵌入代码找到对应 page） |
| `isWide`      | false    | `true`  | `Boolean` | 是否显示宽屏或者小屏                                 |
| `highQuality` | false    | `true`  | `Boolean` | 是否开启高清晰度（不开启默认最低清晰度）             |
| `hasDanmaku`  | false    | `false` | `Boolean` | 是否开启弹幕                                         |
| `iframeClass` | false    |         | `String`  | iframe 自定义 class                                  |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Zeffon Wu
