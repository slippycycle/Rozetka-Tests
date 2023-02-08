import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/Backet.module.scss'
import BacketList from './BacketList'

export default function Backet() {

  const { backetActive } = useAppSelector(state => state.backetReducer)

  let DevicesId: any[] = JSON.parse(localStorage.getItem('backet') as string)

  console.log('backet render', DevicesId)

  return (
    <div className={backetActive ? c.backet_bloor : c.hide}>
      <div className={c.backet_container} >

        <div className={c.header_conatiner}>
          <p>Backet</p>
        </div>

        {DevicesId?.length > 0 ?
          <BacketList devicesidArray={DevicesId} />
          :
          <>
            <div className={c.backet_image_conatiner}>
              <img src='https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg' />
            </div>
            <h2>{'Backet is empty :('}</h2>
          </>
        }
      </div>

    </div>
  )
}
