import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SortbyBrandsLeftBar.module.scss'
import BrandsCheckList from './BrandsCheckList'


export default function SortbyBrandsLeftBar() {


  const takeCurrentType = window.location.pathname.slice(1, 100)

  const dispacth = useAppDispatch()
  const getCurrentType = useAppSelector((state) => state.brandReducer)

  React.useEffect(() => {
    dispacth(fetchBrands(takeCurrentType))
  }, [])

  console.log(getCurrentType.currentType.brands)


  return (
    <div className={c.container}>
      {getCurrentType.loading ? <h2>loading</h2> :
        <BrandsCheckList brandsArray={getCurrentType.currentType.brands} />
      }
    </div>
  )
}
