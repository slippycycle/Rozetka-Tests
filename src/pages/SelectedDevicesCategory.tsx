import React from 'react'
import CategoryHeader from '../components/CategoryHeader'
import ComponentsCategory from '../components/ComponentsCategory'
import SortDevicesBar from '../components/SortDevicesBar'
import { useAppSelector } from '../store/hooks'
import  c from '../styles/SelectedDevicePage.module.scss'

export default function SelectedCategoryPage() {

    const takeCurrentType = window.location.pathname.replaceAll('/', '')

    console.log(takeCurrentType, 'CU')

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)


    const { currentSortType } = useAppSelector(state => state.productReducer)

    return (
        <div className={c.selected_category_wrap}>
            <CategoryHeader brands={selectedBrands} category={takeCurrentType} />
            <SortDevicesBar currentSortType={currentSortType as string} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <ComponentsCategory />

            </div>
        </div>
    )
}
