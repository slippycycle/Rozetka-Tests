import React from 'react'
import { useDispatch } from 'react-redux'
import { Type } from 'typescript'
import { Types } from '../models/TypeModel'
import { useNavigate } from "react-router-dom";
import { typeSlice } from '../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/LeftProductsNavbar.module.scss'

interface TypesComponentProps {
    typesArray: Types[]

}



export default function TypesComponent({ typesArray }: TypesComponentProps) {

    const types = useAppSelector(state => state.typeReducer)
    const dispatch = useAppDispatch()


    let navigate = useNavigate()

    function redirectHandle(tp: Types) {
        navigate(`/${tp.type}`)
    }

    return (
        <>
            {
                typesArray.length ?
                    typesArray.map((tp: Types) => <div onClick={() => { redirectHandle(tp) }} key={tp.type} className={c.item}>{tp.type}</div>)
                    : null
            }
        </>
    )
}
