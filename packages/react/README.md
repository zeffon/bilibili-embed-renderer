# react-bilibili-embed-renderer

It is better to use Bilibili's embed renderer component for React applications.

在`React`中更加方便地使用哔哩哔哩的嵌入代码。

## Usage

1. install deps

```sh
$ yarn install react-bilibili-embed-renderer
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

## Props

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
