import React from 'react'
import c from '../styles/Loader.module.scss'

export default React.memo(function Loader() {
  return (
    <span className={c.loader}></span>
  )
})
