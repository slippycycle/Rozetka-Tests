import React from 'react'
import { AllBrandsContex, MobileSortActive } from '../context'
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import c from '../styles/LeftMobileFilter.module.scss'
import BrandsCheckListContainer from './BrandsCheckListContainer';
import DoubleRangeSlider from './DoubleRangeSlider';
import DoubleRangeSliderMobile from './DoubleRangeSliderMobile';



export default function LeftMobileFilter() {


    const menuState = React.useContext(MobileSortActive)
  

    const {defaultMaxPrice,defaultminPrice,maxPrice,minPrice} = useAppSelector(state => state.rangeReducer)

   

    return (
        <div className={menuState.active ? c.menu_active : c.menu}>
           
            <div className={c.content}>
                <button onClick={menuState.handleMenuState} className={c.close__button}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <BrandsCheckListContainer />
                <div className={c.range__slider__conatiner}>
                    {/* if device has a touch screen */}
                    <DoubleRangeSlider maxSum={maxPrice} startSum={minPrice} endSum={maxPrice} />
                </div>
                <div className={c.range__mobile__slider__conatiner} >
                    {/* if device has no touch screen */}
                    <DoubleRangeSliderMobile maxSum={maxPrice} startSum={minPrice} endSum={maxPrice} />
                </div>


            </div>
        </div>
    )
}
