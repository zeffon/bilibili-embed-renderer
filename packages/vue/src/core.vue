<template>
  <iframe
    :width="width"
    :height="height"
    :src="iframeSrc"
    :allowFullScreen="true"
    :class="finalClassName"
    v-bind="$attrs"
  ></iframe>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { calcHeight, isBrowser } from './helper'

interface Props {
  aid?: string
  bvid?: string
  page?: number
  isWide?: boolean
  highQuality?: boolean
  hasDanmaku?: boolean
  aspectWidth?: number
  aspectHeight?: number
  width?: string | number
  height?: string | number
  iframeClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  page: 1,
  isWide: true,
  highQuality: true,
  hasDanmaku: false,
  width: 480,
  iframeClass: ''
})

// Validate that either aid or bvid is provided
if (!props.aid && !props.bvid) {
  throw new Error('Either aid or bvid must be provided')
}

const defaultAspectWidth = isBrowser ? 4 : 16
const defaultAspectHeight = isBrowser ? 3 : 9
const finalAspectWidth = props.aspectWidth || defaultAspectWidth
const finalAspectHeight = props.aspectHeight || defaultAspectHeight
const height = calcHeight(props.width, props.height, finalAspectWidth, finalAspectHeight)

const highQualityValue = props.highQuality ? 1 : 0
const wideValue = props.isWide ? 1 : 0
const danmakuValue = props.hasDanmaku ? 1 : 0

const bilibiliUrl = '//player.bilibili.com/player.html'

// Build iframe src with either aid or bvid (bvid takes precedence)
const iframeSrc = computed(() => {
  let src = `${bilibiliUrl}?`
  if (props.bvid) {
    src += `bvid=${props.bvid}`
  } else {
    src += `aid=${props.aid}`
  }
  src += `&page=${props.page}&high_quality=${highQualityValue}&as_wide=${wideValue}&danmaku=${danmakuValue}`
  return src
})

// Combine iframeClass with any additional classes from $attrs
const attrs = useAttrs()
const finalClassName = computed(() => {
  const classes = [props.iframeClass]
  if (typeof attrs.class === 'string') {
    classes.push(attrs.class)
  } else if (Array.isArray(attrs.class)) {
    classes.push(...attrs.class)
  } else if (attrs.class && typeof attrs.class === 'object') {
    const classObj = attrs.class as Record<string, boolean>
    Object.keys(classObj).forEach((key) => {
      if (classObj[key]) classes.push(key)
    })
  }
  return classes.filter(Boolean).join(' ') || undefined
})

const { width } = props

// Make sure $attrs are passed through (excluding class since we handle it separately)
defineOptions({
  inheritAttrs: false
})

// Export component props for type checking
export type { Props as BilibiliEmbedRendererProps }
</script>
