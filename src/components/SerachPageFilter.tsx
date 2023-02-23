import React from 'react'
import { AllBrandsContex } from '../context'
import c from '../styles/SearchPage.module.scss'
import BrandsCheckList from './BrandsCheckList'
import RangeContainer from './RangeContainer'

export default function SerachPageFilter() {
   
   
   

    return (
        <div className={c.container}>
            <BrandsCheckList />
            <RangeContainer />
        </div>
    )
}
