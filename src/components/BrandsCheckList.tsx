import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Brands } from '../models/models';
import { fetchBrands } from '../store/features/Brands.Slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
// import c from '../styles/BrandsCheckList.module.scss'
import { addSelectedBrands } from '../store/features/Brands.Slice';

interface BrandsCheckListProps {
    brandsArray: Brands | string[]
}


export default function BrandsCheckList({ brandsArray }: BrandsCheckListProps) {

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

    //without useEffect => Warning: Cannot update a component (`SortbyBrandsLeftBar`) while rendering a different component (`BrandsCheckList`). 
    React.useEffect(() => {
        dispacth(addSelectedBrands(checkedList))
    }, [checkedList])



    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <p className="title">Select Brand</p>
                </div>
                <div className="card-body">
                    {brandsArray?.map((item, index) =>

                        <div key={item + index} className="checkbox-container">
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
