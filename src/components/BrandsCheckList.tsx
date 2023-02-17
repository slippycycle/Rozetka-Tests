import React, { useContext, useEffect, useRef } from 'react'
import { Brands } from '../models/models';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';
import c from '../styles/BrandsCheckList.module.scss'
import { AllBrandsContex } from '../context';

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


    const dispacth = useAppDispatch()

    function handleSelect(event: any) {

        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {

            dispacth(addSelectedBrands([...brandsStore.selectedBrands, value]))


        } else {

            const filteredList = brandsStore.selectedBrands.filter((item) => item !== value);
            dispacth(addSelectedBrands(filteredList))

        }

    };

    const listRef = useRef<HTMLDivElement | null>(null)

    const listElRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className={c.cheklist_container}>

            <div>
                <h2>Select Brands</h2>
            </div>
            <div ref={listRef}>
                {brandsStore.loading ?
                    null
                    :
                    list?.map((item: string) =>
                        <div key={item} >
                            <label className={c.container}>{item}

                                {(brandsStore.selectedBrands as string[] ).includes(item) ?
                                    <input
                                        checked={true}
                                        name="brands"
                                        onChange={() => {}}
                                        value={item}
                                        onClick={handleSelect}
                                        type="checkbox">
                                    </input>
                                    :
                                    <input
                                        checked={false}
                                        name="brands"
                                        onChange={() => {}}
                                        value={item}
                                        onClick={handleSelect}
                                        type="checkbox">
                                    </input>

                                }

                                <span className={c.checkmark}></span>
                            </label>
                        </div>


                    )}
                
            </div>

        </div>

    )
}


