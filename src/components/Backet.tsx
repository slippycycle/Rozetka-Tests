import React, { useEffect } from 'react'
import { handleBacket } from '../store/features/Backet.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Backet.module.scss'
import BacketList from './BacketList'

export default function Backet() {

  const { backetActive, devices} = useAppSelector(state => state.backetReducer)

  let DevicesId: any[] = JSON.parse(localStorage.getItem('backet') as string)

  console.log('backet render', DevicesId)

  const [totalSum, setTotalSum] = React.useState(0)

  console.log(devices,'DEVICES')

  React.useEffect(() => {

    for (let i = 0; i < devices?.length; i++) {
      setTotalSum(prev => prev + devices[i].price )
    }

  },[devices])

  const dispatch = useAppDispatch()

  return (
    <div className={backetActive ? c.backet_bloor : c.hide}>
      <div className={c.backet_container} >
      <button className={c.close__button} onClick={() => dispatch(handleBacket())}>
        X
      </button>

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
        <p className={c.total__sum__text}>Total sum: {totalSum}</p>
        <button className={c.oreder__button}>Order all devices</button>
      </div>

    </div>
  )
}
