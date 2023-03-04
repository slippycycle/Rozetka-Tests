import React from 'react'
import { AllBrandsContex } from '../context'
import { useAppSelector } from '../store/hooks'
import c from '../styles/SearchPage.module.scss'
import BrandsCheckList from './BrandsCheckList'
import RangeContainer from './RangeContainer'

export default function SerachPageFilter() {

    const { error, } = useAppSelector(state => state.productReducer)


    return (

        <div className={c.container}>
            <>
                <BrandsCheckList />
                <RangeContainer />
            </>
        </div>

    )
}
