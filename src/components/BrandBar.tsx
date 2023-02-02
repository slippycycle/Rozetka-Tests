import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import c from '../styles/ProdcutsComponent.module.scss'

export default function BrandBar() {

    const types = useAppSelector(state => state.typeReducer)

    const dispatch = useAppDispatch()

    console.log(types.currentType)

    return (
        <div className={c.brand_bar_conatiner}>
            {types.currentType?.brands?
                types.currentType.brands.map((pr: string) => <div className={c.brand_item}>{pr}</div>)
                : null
            }
        </div>
    )
}
