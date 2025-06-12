import * as React from 'react'
import { calcHeight, isBrowser } from './helper'

interface BilibiliProp extends Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'src' | 'width' | 'height'> {
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

const BilibiliEmbedRenderer = (props: BilibiliProp) => {
  const {
    aid,
    bvid,
    page = 1,
    isWide = true,
    highQuality = true,
    hasDanmaku = false,
    aspectWidth,
    aspectHeight,
    width = 480,
    height,
    iframeClass = '',
    className,
    ...rest
  } = props

  // Validate that either aid or bvid is provided
  if (!aid && !bvid) {
    throw new Error('Either aid or bvid must be provided')
  }

  const defaultAspectWidth = isBrowser ? 4 : 16
  const defaultAspectHeight = isBrowser ? 3 : 9
  const finalAspectWidth = aspectWidth || defaultAspectWidth
  const finalAspectHeight = aspectHeight || defaultAspectHeight
  const finalHeight = calcHeight(width, height, finalAspectWidth, finalAspectHeight)

  const highQualityValue = highQuality ? 1 : 0
  const wideValue = isWide ? 1 : 0
  const danmakuValue = hasDanmaku ? 1 : 0

  const bilibiliUrl = '//player.bilibili.com/player.html'

  // Build iframe src with either aid or bvid (bvid takes precedence)
  let iframeSrc = `${bilibiliUrl}?`
  if (bvid) {
    iframeSrc += `bvid=${bvid}`
  } else {
    iframeSrc += `aid=${aid}`
  }
  iframeSrc += `&page=${page}&high_quality=${highQualityValue}&as_wide=${wideValue}&danmaku=${danmakuValue}`

  // Combine iframeClass with className
  const finalClassName = [iframeClass, className].filter(Boolean).join(' ')

  return (
    <iframe
      width={width}
      height={finalHeight}
      src={iframeSrc}
      allowFullScreen={true}
      className={finalClassName || undefined}
      {...rest}
    />
  )
}

export default BilibiliEmbedRenderer
