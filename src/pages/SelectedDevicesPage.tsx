import React from 'react'
import Backet from '../components/Backet'
import CategoryHeader from '../components/CategoryHeader'
import ComponentsCategory from '../components/ComponentsCategory'
import DevicesComponents from '../components/ComponentsCategory'
import LeftMobileFilter from '../components/LeftMobileFilter'
import SortDevicesBar from '../components/SortDevicesBar'
import { MobileSortActive } from '../context'
import { useAppSelector } from '../store/hooks'

export default function SelectedDevicesPage() {

    const takeCurrentType = window.location.pathname.replaceAll('/', '')

    console.log(takeCurrentType, 'CU')

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)


    const { currentSortType} = useAppSelector(state => state.productReducer  )

    return (
        <>
            <CategoryHeader brands={selectedBrands} category={takeCurrentType} />
            <SortDevicesBar currentSortType={currentSortType as string} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              
                <ComponentsCategory />
                
            </div>
        </>
    )
}
