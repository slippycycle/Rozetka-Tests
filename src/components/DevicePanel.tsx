import React from 'react'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import DeviceContainer from './DeviceContainer'
import Loader from './Loader'
import SortDevicesBar from './SortDevicesBar'


export default function DevicePanel() {


    const takeCurrentType = window.location.pathname.slice(1, 100)

    const dispatch = useAppDispatch()

    const { error, loading, devices, currentSortType } = useAppSelector((state) => state.productReducer)


    const { selectedBrands } = useAppSelector((state) => state.brandReducer)


    React.useEffect(() => {
        //_sort:'rating',_order:'desc'
        //_sort=rating&_order=desc
        //{ type: 'phone', brand: ['apple','samsung'],_sort:'rating',_order:'desc'}
    
            switch (currentSortType) {
                case 'rating':       
                    dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _sort: 'rating', _order: 'desc' }))
                  break;
                case 'expensive':
                    dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _sort: 'price', _order: 'desc' }))
                  break;
                case 'cheap':
                    dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _sort: 'price' }))
                  break;
                default:
                    dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands }))
              }

    

    }, [selectedBrands, currentSortType])

    return (
        <div className={c.wrap}>
            <SortDevicesBar />
            {error ? <h2>{error}</h2> : null}
            {loading ? <Loader/> : <DeviceContainer devicesArray={devices} />}
        </div>
    )
}
