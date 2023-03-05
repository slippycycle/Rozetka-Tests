import React from 'react'
import { sortDevicestypes } from '../models/models'
import { setLimit, setSortType } from '../store/features/Devices.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/SortDevicesBar.module.css'
import { MobileSortActive } from '../context'
import DropdownLimitButton from './DropdownLimitButton'
import DropdownSortButton from './DropdownSortButton'







function SortDevicesBar() {

  let { handleMenuState } = React.useContext(MobileSortActive)

  return (

    <div className={c.container}>
      <button className={c.filter__button} onClick={handleMenuState}>
        filter
        <span className="material-symbols-outlined">
          filter_alt
        </span>
      </button>
      <DropdownLimitButton />
      <DropdownSortButton />
    </div>

  )
}

export default SortDevicesBar;