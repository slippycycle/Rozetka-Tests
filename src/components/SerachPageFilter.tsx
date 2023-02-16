import React from 'react'
import c from '../styles/SearchPage.module.css'
import BrandsCheckList from './BrandsCheckList'
import RangeContainer from './RangeContainer'

export default function SerachPageFilter() {
    
    
    
    

    return (
        <div className={c.container}>
            <BrandsCheckList brandsList={['apple', 'samsung', 'xiaomi', 'XBOX']} />
            <RangeContainer />
        </div>
    )
}
