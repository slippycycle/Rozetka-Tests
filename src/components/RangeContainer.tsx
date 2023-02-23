import React from 'react'
import DoubleRangeSlider from './DoubleRangeSlider'
import DoubleRangeSliderMobile from './DoubleRangeSliderMobile'
import RangeSlider from './RangeSlider'
import c from '../styles/RangeContainer.module.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks'

export default function RangeContainer() {


   
   const {maxPrice,minPrice} = useAppSelector((state)=> state.rangeReducer )

   

    return (
        <>
        

                <div className={c.range__slider__conatiner}>
                    {/* if device has a touch screen */}
                    <DoubleRangeSlider maxSum={maxPrice} startSum={minPrice} endSum={maxPrice} />
                </div>
                <div className={c.range__mobile__slider__conatiner} >
                    {/* if device has no touch screen */}
                    <DoubleRangeSliderMobile maxSum={maxPrice} startSum={minPrice} endSum={maxPrice} />
                </div>

            
        </>

    )
}
