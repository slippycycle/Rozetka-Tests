import React from 'react'
import { sortDevicestypes, Types } from '../models/models'
import { fetchProducts } from '../store/features/Devices.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import { getPages } from '../utils/pagination'
import CategoryHeader from './CategoryHeader'
import DevicesContainer from './DevicesContainer'
import Loader from './Loader'
import SortDevicesBar from './SortDevicesBar'

interface DevicePanelProps {
    takeCurrentType: string
}

export default function DevicePanel({ takeCurrentType }: DevicePanelProps) {

    const dispatch = useAppDispatch()

    const { error, loading, devices, currentSortType, currentPage, limit } = useAppSelector((state) => state.productReducer)

    const { maxPrice, minPrice, defaultMaxPrice, defaultminPrice } = useAppSelector((state) => state.rangeReducer)

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)




    React.useEffect(() => {

        //as we dont need inculde price verify in default range
        if (maxPrice !== defaultMaxPrice || minPrice > defaultminPrice) {

            switch (currentSortType) {
                case 'rating':
                    dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _sort: 'rating', _order: 'desc', _page: currentPage, _limit: limit }))
                    break;
                case 'expensive':
                    dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _sort: 'price', _order: 'desc', _page: currentPage, _limit: limit }))
                    break;
                case 'cheap':
                    dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _sort: 'price', _page: currentPage, _limit: limit }))
                    break;
                default:
                    dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _page: currentPage, _limit: limit }))
            }

            return;
        }

        switch (currentSortType) {
            case 'rating':
                dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _sort: 'rating', _order: 'desc', _page: currentPage, _limit: limit }))
                break;
            case 'expensive':
                dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _sort: 'price', _order: 'desc', _page: currentPage, _limit: limit }))
                break;
            case 'cheap':
                dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _sort: 'price', _page: currentPage, _limit: limit }))
                break;
            default:
                dispatch(fetchProducts({ type: takeCurrentType, brand: selectedBrands, _page: currentPage, _limit: limit }))

        }
        

    }, [selectedBrands, currentSortType, currentPage, limit, maxPrice, minPrice])


    console.log('MAIN RENDER');

    return (
        <div className={c.wrap}>
            {error ? <h2>{error as string}</h2> : null}
            {loading ? <Loader /> : <DevicesContainer devicesArray={devices} />}
        </div>
    )
}
