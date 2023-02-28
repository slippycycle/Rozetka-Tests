import React, { useEffect } from 'react'
import { handleBasket } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Basket.module.scss'
import BacketList from './BasketList'

export default function Basket() {

  const { basketActive, devices, reload} = useAppSelector(state => state.basketReducer)

  let DevicesId: any[] = JSON.parse(localStorage.getItem('basket') as string)

  console.log('backet render')

  const {totalSum} = useAppSelector(state => state.basketReducer)


  

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

        {DevicesId?.length > 0 ?
          <BacketList devicesidArray={DevicesId} />
          :
          <>
            <div className={c.backet_image_conatiner}>
              <img src='https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg' />
            </div>
            <h2>{'Basket is empty :('}</h2>
          </>
        }
        <div className={c.manage__block}>
          
                <h3>Total sum {totalSum}</h3>
                <button>Make an order</button>
            </div>
        </div>
      </div>
  )
}
