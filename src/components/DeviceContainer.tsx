import React from 'react'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DeviceContainer.module.scss'


export default function DeviceContainer() {


    const takeCurrentType = window.location.pathname.slice(1, 100)

    const dispatch = useAppDispatch()

    const { error, loading, devices } = useAppSelector((state) => state.productReducer)
    const types = useAppSelector((state) => state.typeReducer)

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)


    React.useEffect(() => {
        dispatch(fetchProducts({ type: takeCurrentType, brands: selectedBrands }))

    }, [])

    return (
        <div className={c.wrap}>
            {error ? <h2>{error}</h2> : null}
            {loading ? <h2>loading...</h2> : JSON.stringify(devices)}
        </div>
    )
}
