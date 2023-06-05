import React, { memo } from 'react'
import styles from './Input.module.css'

const Input = ({ ...props }) => {
  return (
    <input {...props} className={styles.input} type="number" />
  )
}

export default memo(Input)