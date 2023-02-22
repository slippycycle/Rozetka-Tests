import React from 'react'
import Backet from '../components/Backet'
import CategoryHeader from '../components/CategoryHeader'
import ComponentsCategory from '../components/ComponentsCategory'
import DevicesComponents from '../components/ComponentsCategory'
import LeftMobileFilter from '../components/LeftMobileFilter'
import { MobileSortActive } from '../context'
import { useAppSelector } from '../store/hooks'

export default function SelectedDevicesPage() {

    const takeCurrentType = window.location.pathname.replaceAll('/', '')

    console.log(takeCurrentType, 'CU')

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)



    return (
        <>
            <CategoryHeader brands={selectedBrands} category={takeCurrentType} />
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              
                <ComponentsCategory />
                
                
            
            </div>
        </>
    )
}
