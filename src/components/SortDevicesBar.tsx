import React from 'react'
import { sortDevicestypes } from '../models/models'
import { fetchProducts, setLimit, setSortType } from '../store/features/Devices.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SortDevicesBar.module.css'
import { memo } from 'react'
import { MobileSortActive } from '../context'
import { SortVariaty } from '../store/features/SortDevices.Slice'






function SortDevicesBar() {


  let { handleMenuState } = React.useContext(MobileSortActive)

  const dispatch = useAppDispatch()


  const [limit, setInnerLimit] = React.useState(30)
  const [innerSortType, setInnerSortType] = React.useState<sortDevicestypes>('rating')


  console.log('sort bar render XXXXXXX')

  function handleSortType(sortType: sortDevicestypes) {
    dispatch(setSortType(sortType))
    setInnerSortType(sortType)
  }

  function handleLimit(limit: number) {
    dispatch(setLimit(limit))
    setInnerLimit(limit)
  }




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
          <a onClick={() => handleLimit(5)} >5</a>
          <a onClick={() => handleLimit(10)} >10</a>
          <a onClick={() => handleLimit(20)} >20</a>
          <a onClick={() => handleLimit(30)} >30</a>
        </div>
      </div>

      <div className={c.dropdown}>

        <button className={c.dropbtn}>{`Sort by: ${innerSortType}`}
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

export default SortDevicesBar;