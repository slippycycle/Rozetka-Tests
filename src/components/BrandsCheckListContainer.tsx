import React from 'react'
import { brand } from '../models/models'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import BrandsCheckList from './BrandsCheckList'

interface  BrandsCheckListContainerProps {
    brandsList?: brand[]
}


export default function BrandsCheckListContainer({brandsList}:BrandsCheckListContainerProps) {



    
    const getCurrentType = useAppSelector((state) => state.brandReducer)
    
    console.log('render sortbybrandsleftBar as left bar')

    
    const dispacth = useAppDispatch()
    
    React.useEffect(() => {
        const takeCurrentType = window.location.pathname.slice(1, 100)
        dispacth(fetchBrands(takeCurrentType))
        dispacth(setAvailableBrands(getCurrentType.currentType.brands))
    }, [])

    return (
        <>
            {getCurrentType.loading ? <h2>loading</h2> :
                <BrandsCheckList />
            }
        </>
    )
}
