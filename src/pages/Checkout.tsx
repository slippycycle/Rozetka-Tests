import React from 'react'
import OrderPage from './OrderList'
import c from '../styles/Checkout.module.scss'
import CheckOutInfoPanel from '../components/CheckOutInfoPanel'

export default function Checkout() {
  return (
    <div className={c.checkout_container} >

      <div className={c.order_list}>
        <OrderPage />
      </div>



      <div className={c.info_border_wrap} >
        <CheckOutInfoPanel />
      </div>


    </div>
  )
}
