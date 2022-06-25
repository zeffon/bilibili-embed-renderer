import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer'
import 'react-bilibili-embed-renderer/dist/bilibili-embed-renderer.css'

type FeatureItem = {
  item: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    item: (
      <>
        <BilibiliEmbedRenderer aid="414096645" />
      </>
    )
  },
  {
    item: (
      <>
        <BilibiliEmbedRenderer aid="414096645" page={30} />
      </>
    )
  }
]

function Feature({ item }: FeatureItem) {
  return (
    <div className={clsx('col col--16')}>
      <div className="text--center padding-horiz--md">
        <p>{item}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
