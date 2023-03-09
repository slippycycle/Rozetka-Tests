import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/OrderPage.module.scss'

export default function OrderPage() {


  const [res,setRes] = React.useState([]) 

  const {devicesIdCounts} = useAppSelector(state => state.basketDataReducer)

  const {totalSum} = useAppSelector(state => state.basketReducer)

  React.useEffect(() => {

    if (devicesIdCounts.length > 0) {
      setRes(devicesIdCounts )
    } else {
      setRes(  JSON.parse(localStorage.getItem('basketData') as string) )
    }


    console.log( devicesIdCounts);

  }, [devicesIdCounts,totalSum])
 

  return (
    <div className={c.wrap}>
      <h2>{totalSum}</h2>
      {res.map((el) => <li>{el.id}<p>{el.count}</p></li>)
      }
    </div>
  )
}
  