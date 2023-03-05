import React from 'react'
import { Types } from '../models/models'
import { useNavigate } from "react-router-dom";
import c from '../styles/HomePage.module.scss'
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
        <ul className={c.categories_list}>
            {
                typesArray.length ?
                    typesArray.map((tp: Types) =>
                        <li>
                            <a onClick={() => { redirectHandle(tp) }} key={tp.type} className={c.item}>{tp.fullTypeName}</a>
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </li>)
                    :
                    null
            }
        </ul>
    )
}
