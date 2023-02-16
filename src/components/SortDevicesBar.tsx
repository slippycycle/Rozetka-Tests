import React from 'react'
import { sortDevicestypes } from '../models/models'
import { fetchProducts, setSortType } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SortDevicesBar.module.css'
import { memo } from 'react'
import { MobileSortActive } from '../context'



interface SortDevicesBarProps {
  currentSortType: string
}


function SortDevicesBar({ currentSortType }: SortDevicesBarProps) {

  const dispatch = useAppDispatch()

  console.log('sort bar render X')

  function handleSortType(sortType: sortDevicestypes) {

    dispatch(setSortType(sortType))

  }


  let { handleMenuState } = React.useContext(MobileSortActive)

  return (

    <div className={c.container}>
      <button className={c.filter__button} onClick={handleMenuState}>filter</button>
    
      <div className={c.dropdown}>
       
        <button className={c.dropbtn}>{currentSortType.length ? `Sort by: ${currentSortType}` : 'Select sort'}</button>
        <div className={c.dropdown_content}>
          <a onClick={() => handleSortType('rating')} >sort by rating</a>
          <a onClick={() => handleSortType('expensive')} >from expensive to cheap</a>
          <a onClick={() => handleSortType('cheap')} >from cheap to expensive</a>
        </div>
      </div>
       
    </div>

  )
}

export default memo(SortDevicesBar);