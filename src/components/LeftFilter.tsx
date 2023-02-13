import React from 'react'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/LeftFilter.module.scss'
import BrandsCheckList from './BrandsCheckList'
import RangeSlider from './RangeSlider'



export default React.memo(function LeftFilter() {


  const takeCurrentType = window.location.pathname.slice(1, 100)

  const dispacth = useAppDispatch()
  const getCurrentType = useAppSelector((state) => state.brandReducer)


  console.log('render sortbybrandsleftBar as left bar')

  React.useEffect(() => {
    dispacth(fetchBrands(takeCurrentType))
    dispacth(setAvailableBrands(getCurrentType.currentType.brands))
  }, [])

  {

  }
  return (
    <div className={c.container}>
      {getCurrentType.loading ? <h2>loading</h2> :
        <BrandsCheckList />
      }
      <h2>Start Price</h2>
      <RangeSlider maxSum={100000}/>
      <h2>Max Price</h2>
      <RangeSlider maxSum={100000}/>
    </div>
  )
});
