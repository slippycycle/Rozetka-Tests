import React, { useEffect } from 'react'
import { Brands } from '../models/TypeModel';
import { fetchBrands } from '../store/features/Brands.Slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

interface BrandsCheckListProps {
    brandsArray: Brands | string[]
}


export default React.memo(function BrandsCheckList({ brandsArray }: BrandsCheckListProps) {

    const [checkedList, setCheckedList] = React.useState<[] | string[]>(['wadwad']);
    const [brandsList, setBrandsList] = React.useState([])


    const handleSelect = (event: any) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            //Add checked item into checkList
            setCheckedList([...checkedList, value]);
        } else {
            //Remove unchecked item from checkList
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
    };


    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <p className="title">Select Programming Language</p>
                </div>

                <div className="list-container">
                    <label>You Selected:</label>
                    {checkedList?.map((item, index) => {
                        return (
                            <div className="chip">
                                <p className="chip-label">{item}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="card-body">
                    {brandsArray?.map((item, index) => {
                        return (
                            <div key={item} className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="languages"
                                    value={item}
                                    onChange={handleSelect}
                                />
                                <label>{item}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
})
