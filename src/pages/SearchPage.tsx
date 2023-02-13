import React from 'react'
import CategoryHeader from '../components/CategoryHeader'
import ComponentsCategory from '../components/ComponentsCategory'
import DeviceContainer from '../components/DeviceContainer'
import Loader from '../components/Loader'
import SortDevicesBar from '../components/SortDevicesBar'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'

export default function SearchPage() {

  let searchQuerry = window.location.pathname.replaceAll('/', '').replace('search', '')


  const dispatch = useAppDispatch()

  const { error, loading, devices, currentSortType, currentPage, limit } = useAppSelector((state) => state.productReducer)


  const { selectedBrands } = useAppSelector((state) => state.brandReducer)



  React.useEffect(() => {
    //_sort:'rating',_order:'desc'
    //_sort=rating&_order=desc
    //{ type: 'phone', brand: ['apple','samsung'],_sort:'rating',_order:'desc'}
    //{ type: 'phone', brand: [], _sort: 'rating', _order: 'desc',_page: '1',_limit:3 }

    switch (currentSortType) {
      case 'rating':
        dispatch(fetchProducts({ q: searchQuerry, _sort: 'rating', _order: 'desc', _page: currentPage, _limit: limit }))
        break;
      case 'expensive':
        dispatch(fetchProducts({ q: searchQuerry, _sort: 'price', _order: 'desc', _page: currentPage, _limit: limit }))
        break;
      case 'cheap':
        dispatch(fetchProducts({ q: searchQuerry, _sort: 'price', _page: currentPage, _limit: limit }))
        break;
      default:
        dispatch(fetchProducts({ q: searchQuerry, _page: currentPage, _limit: limit }))
    }

  }, [selectedBrands, currentSortType, currentPage, limit])

  // http://localhost:3001/products?name_like=


  // const brands = ['apple', 'samsung', 'xiaomi']

  // const similiraties = []


  // function findMoreSimilar (source: string[],query:string) {

  //   for (let i = 0; source.length > i; i++) {

  //     let similarWordsCount = 0

  //     for (let j = 0; source[i].length > j; j++) {
  //       if (query.includes(source[i][j])) {
  //         similarWordsCount += 1
  //       }
  //     }

  //     console.log(similarWordsCount)

  //     if (similarWordsCount >= 4) {

  //       similiraties.push({string:query,count: similarWordsCount, source: brands[i]})

  //     }
  //   }
  // }

  // findMoreSimilar(brands,'iphone')

  // console.log(similiraties)

  return (
    <>
   
    <h2>
      wadwad
    </h2>
    </>
  )
}
