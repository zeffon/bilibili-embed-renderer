Language : [English](./README.md) | 简体中文

<h1 align="center">bilibili-embed-renderer</h1>

在 `React` 或者 `Vue` 中更加方便地使用哔哩哔哩的嵌入代码。

请查看[演示](https://zeffon.github.io/bilibili-embed-renderer/)

与官方的嵌入代码相比较，bilibili-embed-renderer 做了如下优化：

1. 可以全屏显示播放器
2. 默认开启高清分辨率
3. 默认关闭弹幕
4. 自定义宽高

## 使用

### react 版本

1. 安装依赖

   ```sh
   $ npm install react-bilibili-embed-renderer
   # 或者
   $ yarn install react-bilibili-embed-renderer
   # 或者
   $ pnpm install react-bilibili-embed-renderer
   ```

2. 引入组件和样式

   ```ts
   import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
   ```

3. 使用组件

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   <!-- 或者使用 bvid (推荐) -->
   <BilibiliEmbedRenderer bvid="BV1YRuDeKEZg" />
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

// 或者在`main.ts`全局注册该组件
import { createApp } from 'vue'
import App from './App.vue'
import BilibiliEmbedRenderer from 'vue-bilibili-embed-renderer'

const app = createApp(App)
app.component('BilibiliEmbedRenderer', BilibiliEmbedRenderer)
app.mount('#app')
```

3. 使用组件

   ```tsx
   <BilibiliEmbedRenderer aid="3787944" />
   <!-- 或者使用 bvid (推荐) -->
   <BilibiliEmbedRenderer bvid="BV1YRuDeKEZg" />
   ```

## 参数

| 字段           | 是否必传 | 默认值    | 类型               | 描述                                                  |
| :------------- | -------- | --------- | ------------------ | ----------------------------------------------------- |
| `aid`          | false\*  |           | `String`           | 视频的 aid（aid 或 bvid 必须提供其中一个）            |
| `bvid`         | false\*  |           | `String`           | 视频的 bvid（推荐使用，aid 或 bvid 必须提供其中一个） |
| `aspectWidth`  | false    | `4`或`16` | `Number`           | 宽高比的宽值(PC 端设备为`4`，移动端设备为`16`)        |
| `aspectHeight` | false    | `3`或`9`  | `Number`           | 宽高比的高值(PC 端设备为`3`，移动端设备为`9`)         |
| `width`        | false    | `480`     | `Number`或`String` | 视频窗口的宽度                                        |
| `height`       | false    | `360`     | `Number`或`String` | 视频窗口的高度(**不传时会根据宽高比自动计算数值**)    |
| `page`         | false    | `1`       | `Number`           | 视频集合中第几个视频 （可以在嵌入代码找到对应 page）  |
| `isWide`       | false    | `true`    | `Boolean`          | 是否显示宽屏或者小屏                                  |
| `highQuality`  | false    | `true`    | `Boolean`          | 是否开启高清晰度（不开启默认最低清晰度）              |
| `hasDanmaku`   | false    | `false`   | `Boolean`          | 是否开启弹幕                                          |
| `iframeClass`  | false    |           | `String`           | iframe 自定义 class                                   |

\*`aid` 或 `bvid` 必须提供其中一个。推荐使用 `bvid`，因为它更加用户友好且稳定。

> 参数值如何获取

### 方法一：使用哔哩哔哩的嵌入代码（最简单）

打开你所需要使用的视频，找到分享按钮，点击里面的嵌入代码，你可以复制如下代码：

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

### 方法二：使用哔哩哔哩 API 从 bvid 获取 aid

如果你有 `bvid`（它更加用户友好，可以在视频 URL 中看到），你可以直接在组件中使用它。但是，如果你需要为其他目的获取 `aid`，可以使用哔哩哔哩 API：

**API 接口：** `https://api.bilibili.com/x/web-interface/view?bvid={BVID}`

**示例：**

```
https://api.bilibili.com/x/web-interface/view?bvid=BV1YRuDeKEZg
```

该 API 返回包含 `aid` 的视频信息。响应结构如下：

```json
{
  "code": 0,
  "message": "0",
  "data": {
    "bvid": "BV1YRuDeKEZg",
    "aid": 112478086563329,
    "title": "..."
    // ... 其他视频数据
  }
}
```

**注意：** 推荐使用 `bvid` 而不是 `aid`，因为：

- 它更加稳定且不会改变
- 它可以在视频 URL 中看到（例如：`https://www.bilibili.com/video/BV1YRuDeKEZg`）
- 它更加用户友好

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Zeffon Wu
