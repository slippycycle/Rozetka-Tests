import React from 'react'
import { AllBrandsContex } from '../context'
import c from '../styles/SearchPage.module.scss'
import BrandsCheckList from './BrandsCheckList'
import RangeContainer from './RangeContainer'

export default function SerachPageFilter() {
   
   
    const brands = React.useContext(AllBrandsContex)

    return (
        <div className={c.container}>
            <BrandsCheckList brandsList={brands.brands} />
            <RangeContainer />
        </div>
    )
}
