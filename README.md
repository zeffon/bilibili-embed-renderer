Language : English | [简体中文](./README-zh-CN.md)

<h1 align="center">bilibili-embed-renderer</h1>

It is better to use Bilibili's embed renderer component for React or Vue applications.

Please look [Demo](https://zeffon.github.io/bilibili-embed-renderer/)

Compared with the official embed renderer, bilibili-embed-renderer has been optimized as follows:

1. The player can be displayed in full screen
2. Enable HD resolution by default
3. Bullet Chatting is closed by default
4. Customize the width and height

## Usage

### in react usage

1. install deps

   ```sh
   $ npm install react-bilibili-embed-renderer -S
   # or
   $ yarn install react-bilibili-embed-renderer
   # or
   $ pnpm install react-bilibili-embed-renderer -S
   ```

2. import component and css

   ```ts
   import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
   import 'react-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'
   ```

3. use component

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   <!-- or using bvid (preferred) -->
   <BilibiliEmbedRenderer bvid="BV1YRuDeKEZg" />
   ```

### in vue usage

> Support vue2 and vue3

1. install deps

   ```sh
   $ npm install vue-bilibili-embed-renderer -S
   # or
   $ yarn install vue-bilibili-embed-renderer
   # or
   $ pnpm install vue-bilibili-embed-renderer -S
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
   <!-- or using bvid (preferred) -->
   <BilibiliEmbedRenderer bvid="BV1YRuDeKEZg" />
   ```

## Parameters

| Parameters     | Require | Default   | Type      | descript                                                 |
| :------------- | ------- | --------- | --------- | -------------------------------------------------------- |
| `aid`          | false\* |           | `String`  | video's aid (either aid or bvid is required)             |
| `bvid`         | false\* |           | `String`  | video's bvid (preferred, either aid or bvid is required) |
| `aspectWidth`  | false   | `4`or`16` | `Number`  | Aspect ratio width (pc is `4`, and mobile is `16`)       |
| `aspectHeight` | false   | `3`or`9`  | `Number`  | Aspect ratio height (pc is `3`, and mobile is `9`)       |
| `width`        | false   | `480`     | `Number`  | The width of the video window                            |
| `height`       | false   | `360`     | `Number`  | The height of the video window                           |
| `page`         | false   | `1`       | `Number`  | Sequence number in the video collection                  |
| `isWide`       | false   | `true`    | `Boolean` | Whether to display widescreen or small screen            |
| `highQuality`  | false   | `true`    | `Boolean` | Whether to turn on high definition                       |
| `hasDanmaku`   | false   | `false`   | `Boolean` | Whether to open the popup.                               |
| `iframeClass`  | false   |           | `String`  | Iframe constom class                                     |

\*Either `aid` or `bvid` must be provided. `bvid` is preferred as it's more user-friendly and stable.

> How to find parameters value?

### Method 1: Using Bilibili's embed code (easiest)

Open the video you want to use on Bilibili. You should find the `share Button` and focus it, then click `嵌入代码`, finally you can get the following code:

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

### Method 2: Using the Bilibili API to get aid from bvid

If you have a `bvid` (which is more user-friendly and visible in the URL), you can use it directly in the component. However, if you need to get the `aid` for other purposes, you can use the Bilibili API:

**API Endpoint:** `https://api.bilibili.com/x/web-interface/view?bvid={BVID}`

**Example:**

```
https://api.bilibili.com/x/web-interface/view?bvid=BV1YRuDeKEZg
```

This API returns video information including the `aid`. The response structure looks like:

```json
{
  "code": 0,
  "message": "0",
  "data": {
    "bvid": "BV1YRuDeKEZg",
    "aid": 112478086563329,
    "title": "..."
    // ... other video data
  }
}
```

**Note:** `bvid` is preferred over `aid` because:

- It's more stable and doesn't change
- It's visible in the video URL (e.g., `https://www.bilibili.com/video/BV1YRuDeKEZg`)
- It's more user-friendly to work with

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Zeffon Wu
