Language : English | [简体中文](./README-zh-CN.md)

<h1 align="center">bilibili-embed-renderer</h1>

It is better to use Bilibili's embed renderer component for React or Vue applications.

Please look [Demo](https://zeffon.github.io/bilibili-embed-renderer/)

Compared with the official embed renderer, bilibili-embed-renderer has been optimized as follows:

1. The player can be displayed in full screen
2. Enable HD resolution by default
3. Bullet Chatting is closed by default
4. Customize the width and height, and make the mobile style compatible

## Usage

### in react usage

1. install deps

   ```sh
   $ npm install react-bilibili-embed-renderer
   # or
   $ yarn install react-bilibili-embed-renderer
   # or
   $ pnpm install react-bilibili-embed-renderer
   ```

2. import component and css

   ```ts
   import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
   import 'react-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'
   ```

3. use component

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   ```

### in vue usage

> Support vue2 and vue3

1. install deps

   ```sh
   $ yarn install vue-bilibili-embed-renderer
   ```

2. import component and css

   You can use components alone or global register components.

   ```ts
   // use alone in single vue component
   import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'
   import 'vue-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'

   // or global register component in `main.ts`
   import { createApp } from 'vue'
   import App from './App.vue'
   import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'
   import 'vue-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'

   const app = createApp(App)
   app.component('BilibiliEmbedRenderer', BilibiliEmbedRenderer)
   app.mount('#app')
   ```

3. use component

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   ```

## Parameters

| Parameters    | Require | Default | Type      | descript                                      |
| :------------ | ------- | ------- | --------- | --------------------------------------------- |
| `aid`         | true    |         | `String`  | video's aid                                   |
| `width`       | false   | `480`   | `Number`  | The width of the video window                 |
| `height`      | false   | `360`   | `Number`  | The height of the video window                |
| `page`        | false   | `1`     | `Number`  | Sequence number in the video collection       |
| `isWide`      | false   | `true`  | `Boolean` | Whether to display widescreen or small screen |
| `highQuality` | false   | `true`  | `Boolean` | Whether to turn on high definition            |
| `hasDanmaku`  | false   | `false` | `Boolean` | Whether to open the popup.                    |
| `iframeClass` | false   |         | `String`  | Iframe constom class                          |

> How to find parameters value?
> Open the video you want to use on Bilibili. You should find the `share Button` and focus it, then click `嵌入代码`, finally you can get the following code.

```html
<iframe
  src="//player.bilibili.com/player.html?aid=3787944&bvid=BV12s411X7z3&cid=6078845&page=1"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
>
</iframe>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Zeffon Wu
