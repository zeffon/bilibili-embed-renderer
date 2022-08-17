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
```

3. use component

```tsx
<BilibiliEmbedRenderer aid="3787944" />
```

## Parameters

| 字段           | 是否必传 | 默认值    | 类型               | 描述                                                 |
| :------------- | -------- | --------- | ------------------ | ---------------------------------------------------- |
| `aid`          | true     |           | `String`           | 视频的 aid（可以在嵌入代码找到找到对应 aid）         |
| `aspectWidth`  | false    | `4`或`16` | `Number`           | 宽高比的宽值(PC 端设备为`4`，移动端设备为`16`)       |
| `aspectHeight` | false    | `3`或`9`  | `Number`           | 宽高比的高值(PC 端设备为`3`，移动端设备为`9`)        |
| `width`        | false    | `480`     | `Number`或`String` | 视频窗口的宽度                                       |
| `height`       | false    | `360`     | `Number`或`String` | 视频窗口的高度(**不传时会根据宽高比自动计算数值**)   |
| `page`         | false    | `1`       | `Number`           | 视频集合中第几个视频 （可以在嵌入代码找到对应 page） |
| `isWide`       | false    | `true`    | `Boolean`          | 是否显示宽屏或者小屏                                 |
| `highQuality`  | false    | `true`    | `Boolean`          | 是否开启高清晰度（不开启默认最低清晰度）             |
| `hasDanmaku`   | false    | `false`   | `Boolean`          | 是否开启弹幕                                         |
| `iframeClass`  | false    |           | `String`           | iframe 自定义 class                                  |
