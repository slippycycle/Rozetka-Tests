import React from 'react'
import { sortDevicestypes } from '../models/models'
import { fetchProducts, setSortType } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SortDevicesBar.module.css'


export default function SortDevicesBar() {


  const dispatch = useAppDispatch()

  console.log('sort bar render')

  const { currentSortType } = useAppSelector(state => state.productReducer)

  function handleSortType(sortType: sortDevicestypes) {

    dispatch(setSortType(sortType))
   

  }


  return (
    <div  className={c.conatiner}>
      <div className={c.dropdown}>
        <button className={c.dropbtn}>{currentSortType.length? `Sort by: ${currentSortType}`: 'Select sort'}</button>
        <div className={c.dropdown_content}>
          <a onClick={() => handleSortType('rating')} >sort by rating</a>
          <a onClick={() => handleSortType('expensive')} >from expensive to cheap</a>
          <a onClick={() => handleSortType('cheap')} >from cheap to expensive</a>
        </div>
      </div>
    </div>
  )
}
