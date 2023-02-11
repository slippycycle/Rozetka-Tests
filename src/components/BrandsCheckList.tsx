import React, { useEffect } from 'react'
import { Brands } from '../models/models';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';

interface BrandsCheckListProps {
    brandsArray: Brands | string[]
}





export default function BrandsCheckList() {


    const brandsStore = useAppSelector(state => state.brandReducer)

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
        <div >
            <div>
                <div>
                    <h2>Select Brands</h2>
                </div>
                <div>
                    {brandsStore.loading ?
                        null
                        :
                        brandsStore.currentType.brands?.map((item, index) =>

                            <div key={item} >
                                <input
                                    type="checkbox"
                                    name="languages"
                                    value={item}
                                    onClick={handleSelect}
                                />
                                <label>{item}</label>
                            </div>

                        )}
                </div>
            </div>
        </div>

    )
}
