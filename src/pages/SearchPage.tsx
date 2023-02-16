import React, { useRef } from 'react'
import DeviceContainer from '../components/DeviceContainer'
import LeftFilter from '../components/LeftFilter'
import Loader from '../components/Loader'
import SearchHeader from '../components/SearchHeader'
import SerchedDevices from '../components/SerchedDevices'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SearchPage.module.scss'


export default function SearchPage() {

  let searchQuerry = window.location.pathname.replaceAll('/', '').replace('search', '')


  const dispatch = useAppDispatch()

  const { error, loading, devices, currentSortType, currentPage, limit } = useAppSelector((state) => state.productReducer)



  React.useEffect(() => {



    switch (currentSortType) {
      case 'rating':
        dispatch(fetchProducts({ q: searchQuerry, _sort: 'rating', _order: 'desc', }))
        break;
      case 'expensive':
        dispatch(fetchProducts({ q: searchQuerry, _sort: 'price', _order: 'desc', }))
        break;
      case 'cheap':
        dispatch(fetchProducts({ q: searchQuerry, _sort: 'price', }))
        break;
      default:
        dispatch(fetchProducts({ q: searchQuerry }))

    }

  }, [currentSortType, currentPage, limit,])






  return (
    <>
      {!loading ?
        <>
          <div className={c.wrap}>
            <LeftFilter />
            <SearchHeader searchQuerry={searchQuerry} count={devices.length} />
            <SerchedDevices />
            <DeviceContainer devicesArray={devices} />
          </div>
        </>
        :
        <Loader />

      }
    </>
  )
}
