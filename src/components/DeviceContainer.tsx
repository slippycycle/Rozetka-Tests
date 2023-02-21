import React from 'react'
import { DeviceI } from '../models/models'
import backetSlice, { handleBacket } from '../store/features/Backet.Slice'
import { setCurrentPage, setNextPage } from '../store/features/Device.Slice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import { getPages } from '../utils/pagination'
import DeviceItem from './DeviceItem'


interface DeviceContainerProps {
    devicesArray: DeviceI[]
}



export default function DeviceContainer({ devicesArray }: DeviceContainerProps) {

    const dispacth = useAppDispatch()

    const [pagesArray, setPagesArray] = React.useState<number[]>([])

    React.useEffect(() => {
        setPagesArray(getPages(limit, tottalItems))
    }, [])

    const { tottalItems, limit, currentPage } = useAppSelector(state => state.productReducer)



    return (
        <>
            <div className={c.content}>
                {devicesArray?.map((dev) => <DeviceItem handleBacketFn={handleBacket} dispatch={dispacth} device={dev} />)}
            </div>
            <div className={c.pages_conatiner}>
               {pagesArray.length > 1 ?
               <> 
                {pagesArray.map((el) =>
                    <button className={el == currentPage ? c.page__button_active : c.page__button} onClick={() => { dispacth(setCurrentPage(el)) }} >
                        {el}
                    </button>
                )}
               </>
               : 
               null

               }
                {
                    currentPage == pagesArray[pagesArray.length - 1] ?
                        null
                        :
                        <button className={c.page__button__next} onClick={() => { dispacth(setNextPage()) }}>Next page</button>
                }
           
            </div>
        </>
    )
}
