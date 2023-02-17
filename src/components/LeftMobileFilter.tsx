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
                    <DoubleRangeSlider maxSum={100000} startSum={0} endSum={80000} />
                </div>
                <div className={c.range__mobile__slider__conatiner} >
                    {/* if device has no touch screen */}
                    <DoubleRangeSliderMobile maxSum={200000} startSum={20000} endSum={80000} />
                </div>


            </div>
        </div>
    )
}
