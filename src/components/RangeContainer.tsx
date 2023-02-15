import React from 'react'
import DoubleRangeSlider from './DoubleRangeSlider'
import DoubleRangeSliderMobile from './DoubleRangeSliderMobile'
import RangeSlider from './RangeSlider'
import c from '../styles/RangeContainer.module.scss'

export default function RangeContainer() {


   


    return (
        <>
        

                <div className={c.range__slider__conatiner}>
                    {/* if device has a touch screen */}
                    <DoubleRangeSlider maxSum={100000} startSum={20000} endSum={100000} />
                </div>
                <div className={c.range__mobile__slider__conatiner} >
                    {/* if device has no touch screen */}
                    <DoubleRangeSliderMobile maxSum={100000} startSum={20000} endSum={100000} />
                </div>

            
        </>

    )
}
