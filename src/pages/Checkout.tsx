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

        <div className={c.delivery}>

          <button className={c.deliveries__city}>

            <span className="material-symbols-outlined">
              share_location
            </span>

            <div className={c.city_info}>
              <p>Your city </p>
              <h2>{'City nameeee'}</h2>
            </div>
            <div className={c.chevron_right_wrap}>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </div>
          </button>

          <div className={c.deliveries_variety_btns}>
              <label className={c.radio_container}>One
              <input type="radio"  name="radio"/>
                <span className={c.radio_checkmark}></span>
            </label>
            <label className={c.radio_container}>Two
              <input type="radio" name="radio"/>
                <span className={c.radio_checkmark}></span>
            </label>
            <label className={c.radio_container}>Three
              <input type="radio" name="radio"/>
                <span className={c.radio_checkmark}></span>
            </label>
          
          </div>

        </div>

      </div>

      <div className={c.info_panel_container}>
        <CheckOutInfoPanel />
      </div>




    </div>

  )
}
