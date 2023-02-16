import React from 'react'
import { AllBrandsContex } from '../context'
import { brand } from '../models/models'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import BrandsCheckList from './BrandsCheckList'



export default function BrandsCheckListContainer() {



    const brands = React.useContext(AllBrandsContex)

    const getCurrentType = useAppSelector((state) => state.brandReducer)

    console.log('render sortbybrandsleftBar as left bar')


    const dispacth = useAppDispatch()

    const [isBrandsFromContetx, setIsBrandsFromContetx] = React.useState(false)

    React.useEffect(() => {

        //if we push brandsList in contex we will use it instead fetch avable Brands by selected type 
        if (brands?.brands) {
            setIsBrandsFromContetx(true)
            return
        }
       
            const takeCurrentType = window.location.pathname.slice(1, 100)
            dispacth(setAvailableBrands(getCurrentType.currentType.brands))
            dispacth(fetchBrands(takeCurrentType))

        
    }, [])



    return (
        <>
            {isBrandsFromContetx ?
                <BrandsCheckList brandsList={brands.brands} />
                :
                <>
                    {getCurrentType.loading ? <h2>loading</h2> :
                        <BrandsCheckList />
                    }

                </>
            }
        </>
    )
}
