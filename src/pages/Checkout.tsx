import React from 'react'
import OrderPage from './OrderList'
import CheckOutInfoPanel from '../components/CheckOutInfoPanel'
import c from '../styles/Checkout.module.scss'

export default function Checkout() {
  return (
    <div className={c.checkout_container} >

      <div className={c.order_list}>
        <OrderPage />
        
      </div>



      
        <CheckOutInfoPanel />


    </div>
  )
}
