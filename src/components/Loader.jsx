import React from 'react'
import c from '../styles/Loader.module.scss'

export default React.memo(function Loader() {
  return (

    <div>
      <span className={c.loader}></span>
    </div>

  )
})
