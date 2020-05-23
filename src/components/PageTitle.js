import React from 'react'
import styles from './PageTitle.module.css'

const PageTitle = ({ titleText }) => {
  return (
    <>
      <h1 className={styles.header}>{titleText}</h1>
    </>
  )
}

export default PageTitle