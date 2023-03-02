import React from 'react'
import { handleBasket } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Basket.module.scss'
import BacketList from './BasketList'

export default function Basket() {

  const { basketActive, devices, reload } = useAppSelector(state => state.basketReducer)
  const { totalSum } = useAppSelector(state => state.basketReducer)

  let devicesId: string[] = JSON.parse(localStorage.getItem('basket') as string)

  console.log('backet render')


  const dispatch = useAppDispatch()

  return (
    <div className={basketActive ? c.backet_bloor : c.hide}>
      <div className={c.backet_container} >

        <button className={c.close__button} onClick={() => dispatch(handleBasket())}>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>

        <div className={c.header_conatiner}>
          <p>Basket</p>
        </div>

        {devicesId?.length > 0 ?
          <BacketList devicesIdArray={devicesId} />
          :
          <>
            <div className={c.backet_image_conatiner}>
              <img src='https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg' />
            </div>
            <h2 className={c.basket_alert}>{'Basket is empty :('}</h2>
          </>
        }
        {devicesId?.length > 0 ?

          <div className={c.manage__block}>

            <h3>Total sum {totalSum}</h3>
            <button>Make an order</button>
          </div>
          :
          null
        }
      </div>
    </div>
  )
}
