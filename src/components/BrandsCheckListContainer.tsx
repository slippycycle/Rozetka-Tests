import React from 'react'
import { AllBrandsContex } from '../context'
import { brand } from '../models/models'
import { fetchBrands, setAvailableBrands } from '../store/features/Brands.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import BrandsCheckList from './BrandsCheckList'



export default function BrandsCheckListContainer() {



   

    const getCurrentType = useAppSelector((state) => state.brandReducer)

    console.log('render sortbybrandsleftBar as left bar')




    const [isBrandsFromContetx, setIsBrandsFromContetx] = React.useState(false)

   



    return (
        <>
            {isBrandsFromContetx ?
                <BrandsCheckList  />
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
