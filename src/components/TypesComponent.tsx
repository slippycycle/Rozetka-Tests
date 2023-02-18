import React from 'react'
import { Types } from '../models/models'
import { useNavigate } from "react-router-dom";
import c from '../styles/LeftProductsNavbar.module.scss'
import { useAppDispatch } from '../store/hooks';
import { addSelectedBrands } from '../store/features/Brands.Slice';

interface TypesComponentProps {
    typesArray: Types[]

}



export default function TypesComponent({ typesArray }: TypesComponentProps) {




    const dispatch = useAppDispatch()

    let navigate = useNavigate()

    function redirectHandle(tp: Types) {
        navigate(`/${tp.type}`)
        //reset selected brands in case we change category page  
        dispatch(addSelectedBrands([]))
    }

    return (
        <>
            {
                typesArray.length ?
                    typesArray.map((tp: Types) => <div onClick={() => { redirectHandle(tp) }} key={tp.type} className={c.item}>{tp.fullTypeName}</div>)
                    : null
            }
        </>
    )
}
