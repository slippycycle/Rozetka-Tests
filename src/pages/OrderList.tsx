import React from 'react'
import { deviceFromBasket } from '../store/features/BasketData'
import { useAppSelector } from '../store/hooks'
import c from '../styles/OrderPage.module.scss'

export default function OrderList() {


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
      {res.map((el) => <li>{el.id}<p>{el.count}</p></li>)
      }
    </div>
  )
}
