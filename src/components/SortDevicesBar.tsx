import React from 'react'
import { sortDevicestypes } from '../models/models'
import { fetchProducts, setLimit, setSortType } from '../store/features/Device.Slice'
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

  const { limit } = useAppSelector(state => state.productReducer)

  let { handleMenuState } = React.useContext(MobileSortActive)

  return (

    <div className={c.container}>
      <button className={c.filter__button} onClick={handleMenuState}>
        filter
        <span className="material-symbols-outlined">
          filter_alt
        </span>
      </button>

      <div className={c.dropdown_limit}>

        <button className={c.dropbtn_limit}>{`Show by: ${limit}`}</button>
        <div className={c.dropdown_content_limit}>
          <a onClick={() => dispatch(setLimit(5))} >5</a>
          <a onClick={() => dispatch(setLimit(10))} >10</a>
          <a onClick={() => dispatch(setLimit(20))} >20</a>
          <a onClick={() => dispatch(setLimit(30))} >30</a>
        </div>
      </div>

      <div className={c.dropdown}>

        <button className={c.dropbtn}>{currentSortType.length ? `Sort by: ${currentSortType}` : 'Select sort'}
          <span className="material-symbols-outlined">
            tune
          </span>
        </button>
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