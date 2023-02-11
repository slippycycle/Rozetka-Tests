import React from 'react'
import { Types } from '../models/models'
import { useNavigate } from "react-router-dom";
import c from '../styles/LeftProductsNavbar.module.scss'

interface TypesComponentProps {
    typesArray: Types[]

}



export default function TypesComponent({ typesArray }: TypesComponentProps) {

    


    let navigate = useNavigate()

    function redirectHandle(tp: Types) {
       

        navigate(`/${tp.type}`)
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
