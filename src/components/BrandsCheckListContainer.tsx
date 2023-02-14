import React from 'react'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import BrandsCheckList from './BrandsCheckList'

export default function BrandsCheckListContainer() {

    const takeCurrentType = window.location.pathname.slice(1, 100)

    const dispacth = useAppDispatch()
    const getCurrentType = useAppSelector((state) => state.brandReducer)


    console.log('render sortbybrandsleftBar as left bar')

    React.useEffect(() => {
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
