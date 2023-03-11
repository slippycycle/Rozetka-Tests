import React from 'react'
import OrderPage from './OrderList'
import CheckOutInfoPanel from '../components/CheckOutInfoPanel'
import c from '../styles/Checkout.module.scss'
import OrderInputsContainer from '../components/OrderInputsContainer'

export default function Checkout() {
  return (
    <div className={c.main_container}>

      <div className={c.content}>

        <OrderInputsContainer />

        <div className={c.order_list}>
          <OrderPage />
        </div>
      </div>

      <div className={c.info_panel_container}>
        <CheckOutInfoPanel />
      </div>

    </div>

  )
}
