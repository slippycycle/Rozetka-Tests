import React from 'react'
import c from '../styles/CheckOutInfoPanel.module.scss'

export default function CheckOutInfoPanel() {
  
  

  return (
    <div className={c.checkout_infro_panle_wrap}>
         <div className={c.promo_code_banner}>
            <p>Promocode</p>
            <h3>Add</h3>
         </div>
         <div className={c.content}>
            <h1>Together</h1>
            <div className={c.text_container}>
               <ul></ul>
            </div>
         </div>
    </div>
  )
}
