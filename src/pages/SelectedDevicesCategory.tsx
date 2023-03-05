import React from 'react'
import CategoryHeader from '../components/CategoryHeader'
import ComponentsCategory from '../components/ComponentsCategory'
import SortDevicesBar from '../components/SortDevicesBar'
import { useAppSelector } from '../store/hooks'
import  c from '../styles/SelectedDevicePage.module.scss'

export default function SelectedCategoryPage() {

    return (
        <div className={c.selected_category_wrap}>
            <CategoryHeader />
            <SortDevicesBar  />
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <ComponentsCategory />

            </div>
        </div>
    )
}
