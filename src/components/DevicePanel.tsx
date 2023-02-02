import React from 'react'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import DeviceContainer from './DeviceContainer'
import SortDevicesBar from './SortDevicesBar'


export default function DevicePanel() {


    const takeCurrentType = window.location.pathname.slice(1, 100)

    const dispatch = useAppDispatch()

    const { error, loading, devices } = useAppSelector((state) => state.productReducer)
    const types = useAppSelector((state) => state.typeReducer)

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)


    React.useEffect(() => {

        dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands }))

    }, [selectedBrands])

    return (
        <div className={c.wrap}>
            <SortDevicesBar />
            {error ? <h2>{error}</h2> : null}
            {loading ? <h2>loading...</h2> : <DeviceContainer devicesArray={devices} />}
        </div>
    )
}
