import React from 'react'
import CheckoutListDeviceItem from '../components/CheckoutListDeviceItem'
import { basketItem } from '../models/models'
import { deviceFromBasket } from '../store/features/BasketData'
import { useAppSelector } from '../store/hooks'
import c from '../styles/OrderList.module.scss'

export default function OrderPage() {


  const [res, setRes] = React.useState<deviceFromBasket[]>([])

  const { devicesIdCounts } = useAppSelector(state => state.basketDataReducer)

  const { totalSum } = useAppSelector(state => state.basketReducer)

  React.useEffect(() => {

    if (devicesIdCounts.length > 0) {
      console.log('first case')
      setRes(devicesIdCounts)
    } else {
      console.log('second case')
      setRes(JSON.parse(localStorage.getItem('basketData') as string))
    }


    console.log(devicesIdCounts);

  }, [, devicesIdCounts, totalSum])


  

  return (
    <div className={c.wrap}>
      <h2>{totalSum}</h2>
      <ul className={c.devices_list} >
        {res.map((el: basketItem) => <CheckoutListDeviceItem key={el.innerId}  id={el.id} color={el.color} innerId={el.innerId} count={el.count} />)
        }
      </ul>
    </div>
  )
}
