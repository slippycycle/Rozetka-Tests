import React from 'react'
import { useDispatch } from 'react-redux'
import { Type } from 'typescript'
import { Types } from '../models/TypeModel'
import { useNavigate } from "react-router-dom";
import { typeSlice } from '../store/features/Types.Slice'
import { useAppSelector } from '../store/hooks'
import c from '../styles/LeftProductsNavbar.module.scss'

interface TypesComponentProps {
    typesArray: Types[]

}



export default function TypesComponent({ typesArray }: TypesComponentProps) {


    let navigate = useNavigate()

    function redirectHandle(tp: string) {

        navigate(`/${tp}`)

    }

    return (
        <>
            {
                typesArray.length ? typesArray.map((tp: Types) => <div onClick={() => { redirectHandle(tp.type) }} key={tp.type} className={c.item}>{tp.type}</div>) : null
            }
        </>
    )
}
