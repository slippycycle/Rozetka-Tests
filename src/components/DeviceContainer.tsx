import React from 'react'
import { DeviceI } from '../models/models'
import backetSlice, { handleBacket } from '../store/features/Backet.Slice'
import { setCurrentPage } from '../store/features/Device.Slice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import { getPages } from '../utils/pagination'
import DeviceItem from './DeviceItem'


interface DeviceContainerProps {
    devicesArray: DeviceI[]
}

type backetArrayType = Array<string | number>

export default function DeviceContainer({ devicesArray }: DeviceContainerProps) {

    const dispacth = useAppDispatch()

    const { tottalItems, limit, currentPage } = useAppSelector(state => state.productReducer)



    console.log(currentPage)


    return (
        <>
            <div className={c.content}>
                {devicesArray?.map((dev) => <DeviceItem handleBacketFn={handleBacket} dispatch={dispacth} device={dev} />)}
            </div>
            <div className={c.pages_conatiner}>

                {getPages(limit, tottalItems).map((el) =>
                    <button className={el == currentPage?c.page__button_active :c.page__button} onClick={() => { dispacth(setCurrentPage(el)) }} >
                        {el}
                    </button>
                )}

            </div>
        </>
    )
}
