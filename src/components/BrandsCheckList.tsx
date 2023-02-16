import React, { useEffect } from 'react'
import { Brands } from '../models/models';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';
import c from '../styles/BrandsCheckList.module.scss'

interface BrandsCheckListProps {
    brandsList?: Brands | string[]
}





export default function BrandsCheckList({ brandsList }: BrandsCheckListProps) {


    let list = []

    const brandsStore = useAppSelector(state => state.brandReducer)
    
    if (brandsList) {
        list = brandsList 
        console.log(brandsList)   
    }
    else {

        list = brandsStore.currentType.brands

    }


    const [checkedList, setCheckedList] = React.useState<[] | string[]>([]);

    const dispacth = useAppDispatch()


    function handleSelect(event: any) {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {

            setCheckedList([...checkedList, value]);


        } else {

            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);

        }

    };




    useEffect(() => {
        dispacth(addSelectedBrands(checkedList))
        //reset page
        dispacth(setCurrentPage(1))
    }, [checkedList])





    return (
        <div className={c.cheklist_container}>

            <div>
                <h2>Select Brands</h2>
            </div>
            <div>
                {brandsStore.loading ?
                    null
                    :
                    list?.map((item, index) =>
                        <div key={item} >
                            <label className={c.container}>{item}
                                <input
                                    name="brands"
                                    value={item}
                                    onClick={handleSelect}
                                    type="checkbox" />
                                <span className={c.checkmark}></span>
                            </label>
                        </div>


                    )}
            </div>

        </div>

    )
}
