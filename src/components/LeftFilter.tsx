import React from 'react'
import { RangePriceContext } from '../context'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/LeftFilter.module.scss'
import BrandsCheckList from './BrandsCheckList'
import BrandsCheckListContainer from './BrandsCheckListContainer'
import RangeContainer from './RangeContainer'
import RangeSlider from './RangeSlider'



export default React.memo(function LeftFilter({}) {






  return (
    <div className={c.container}>
      <BrandsCheckListContainer />
      <RangeContainer />     
    </div>
  )
});
