import React from 'react'
import { MobileSortActive } from '../context'
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import c from '../styles/LeftMobileFilter.module.scss'
import BrandsCheckListContainer from './BrandsCheckListContainer';
import DoubleRangeSlider from './DoubleRangeSlider';
import DoubleRangeSliderMobile from './DoubleRangeSliderMobile';



export default function LeftMobileFilter() {

    const brandsStore = useAppSelector(state => state.brandReducer)

    const menuState = React.useContext(MobileSortActive)

    

    const [checkedList, setCheckedList] = React.useState<[] | string[]>([]);

    const dispacth = useAppDispatch()

    function handleSelect(event: any) {
        const value = event.target.value;
        const isChecked = event.target.checked;

       if (brandsStore.currentType.brands) {

       }

        if (isChecked) {

            setCheckedList([...checkedList, value]);


        } else {

            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);

        }

    };


    React.useEffect(() => {
        dispacth(addSelectedBrands(checkedList))

        //reset page
        dispacth(setCurrentPage(1))
    }, [checkedList])



    return (
        <div className={menuState.active ? c.menu_active : c.menu}>
           
            <div className={c.content}>
                <button onClick={menuState.handleMenuState} className={c.close__button}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <BrandsCheckListContainer/>
                <div className={c.range__slider__conatiner}>
                    {/* if device has a touch screen */}
                    <DoubleRangeSlider maxSum={100000} startSum={20000} endSum={100000} />
                </div>
                <div className={c.range__mobile__slider__conatiner} >
                    {/* if device has no touch screen */}
                    <DoubleRangeSliderMobile maxSum={100000} startSum={20000} endSum={100000} />
                </div>


            </div>
        </div>
    )
}
