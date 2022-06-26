import React from 'react'
import Layout from '@theme/Layout'
import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
import styles from './index.module.css'
import 'react-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles['container']}>
        <BilibiliEmbedRenderer aid="3787944" />
      </div>
    </Layout>
  )
}
