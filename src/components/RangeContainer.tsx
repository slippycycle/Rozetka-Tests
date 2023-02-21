import React from 'react'
import DoubleRangeSlider from './DoubleRangeSlider'
import DoubleRangeSliderMobile from './DoubleRangeSliderMobile'
import RangeSlider from './RangeSlider'
import c from '../styles/RangeContainer.module.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks'

export default function RangeContainer() {


   
   const {defaultMaxPrice,defaultminPrice} = useAppSelector((state)=> state.rangeReducer )

    return (
        <>
        

                <div className={c.range__slider__conatiner}>
                    {/* if device has a touch screen */}
                    <DoubleRangeSlider maxSum={defaultMaxPrice} startSum={defaultminPrice} endSum={defaultMaxPrice} />
                </div>
                <div className={c.range__mobile__slider__conatiner} >
                    {/* if device has no touch screen */}
                    <DoubleRangeSliderMobile maxSum={defaultMaxPrice} startSum={defaultMaxPrice} endSum={defaultMaxPrice} />
                </div>

            
        </>

    )
}
