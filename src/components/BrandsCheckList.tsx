import React, { useContext, useEffect, useRef, useState } from 'react'
import { Brands } from '../models/models';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';
import c from '../styles/BrandsCheckList.module.scss'
import { AllBrandsContex } from '../context';
import axios from 'axios';

interface BrandsCheckListProps {
    brandsList?: Brands | string[]
}





export default  React.memo( function BrandsCheckList({ brandsList }: BrandsCheckListProps) {




    const [list, setList] = React.useState([])

    const brandsStore = useAppSelector(state => state.brandReducer)

    const takeCurrentUtrl = window.location.pathname.replaceAll('/','')

    console.log(takeCurrentUtrl,'URL')
    
    const [types, setTypes] = React.useState([])
    
    async function takeType () {
        const response = await axios.get(`http://localhost:3001/types?type=${takeCurrentUtrl}`)

        return response.data
    }

    
    const [loading, setLoading] = React.useState(true)
 
    React.useEffect(() => {

        takeType().then(res => setList(res[0].brands))

    },[takeCurrentUtrl, ])




    // if (brandsList) {
    //     list = brandsList
    //     console.log(brandsList)
    // }

    // if (brandsStore?.currentType?.brands) {

    //     list = brandsStore.currentType.brands
    // }

    // else {

    //     list = ['s']

    //     useEffect(() => {

    //     },[])

    // }


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

        dispacth(setCurrentPage(1))

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

                                {(brandsStore.selectedBrands as string[]).includes(item) ?
                                    <input
                                        checked={true}
                                        name="brands"
                                        onChange={() => { }}
                                        value={item}
                                        onClick={handleSelect}
                                        type="checkbox">
                                    </input>
                                    :
                                    <input
                                        checked={false}
                                        name="brands"
                                        onChange={() => { }}
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
})


