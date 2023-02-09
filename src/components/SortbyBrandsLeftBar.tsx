import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SortbyBrandsLeftBar.module.scss'
import BrandsCheckList from './BrandsCheckList'


export default function SortbyBrandsLeftBar() {


  const takeCurrentType = window.location.pathname.slice(1, 100)

  const dispacth = useAppDispatch()
  const getCurrentType = useAppSelector((state) => state.brandReducer)


  console.log('render sortbybrandsleftBar as left bar')

  React.useEffect(() => {
    dispacth(fetchBrands(takeCurrentType))
  }, [])

  

  return (
    <div className={c.container}>
      {getCurrentType.loading ? <h2>loading</h2> :
        <BrandsCheckList  />
      }
    </div>
  )
}
