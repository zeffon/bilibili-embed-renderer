import React from 'react'
import Layout from '@theme/Layout'
import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
import styles from './index.module.css'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles['container']}>
        <BilibiliEmbedRenderer aid="3787944" />
      </div>
    </Layout>
  )
}
