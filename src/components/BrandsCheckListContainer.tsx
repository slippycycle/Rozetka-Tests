import React from 'react'
import { brand } from '../models/models'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import BrandsCheckList from './BrandsCheckList'



export default function BrandsCheckListContainer() {




    const getCurrentType = useAppSelector((state) => state.brandReducer)

    console.log('render sortbybrandsleftBar as left bar')

    const takeCurrentType = window.location.pathname.slice(1, 100)

    const dispacth = useAppDispatch()

    React.useEffect(() => {


        dispacth(setAvailableBrands(getCurrentType.currentType.brands))
        dispacth(fetchBrands(takeCurrentType))
    }, [])

    return (
        <>
            {getCurrentType.loading ? <h2>loading</h2> :
                <BrandsCheckList />
            }
        </>
    )
}
