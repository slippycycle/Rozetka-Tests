import React, { useRef } from 'react'
import { handleBacket } from '../store/features/Backet.Slice'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SearchPage.module.css'
import DeviceContainer from './DeviceContainer'
import DeviceItem from './DeviceItem'
import Loader from './Loader'
import SearchHeader from './SearchHeader'
import SerchedDevices from './SerchedDevices'

type searchQuery = string

interface SearchPageDevicesPanelProps {
    query: searchQuery
}


export default function SearchPageDevicesPanel({ query }: SearchPageDevicesPanelProps) {


    const dispatch = useAppDispatch()

    const { error, loading, devices, currentSortType, currentPage, limit } = useAppSelector((state) => state.productReducer)

    const { maxPrice, minPrice } = useAppSelector((state) => state.rangeReducer)

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)

    const selectedBrandsRef = useRef(null)



    React.useEffect(() => {

        if (maxPrice !== 200000 || minPrice > 0) {
            switch (currentSortType) {
                case 'rating':
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, _sort: 'rating', _order: 'desc', brand: selectedBrands }))
                    break;
                case 'expensive':
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, _sort: 'price', _order: 'desc', brand: selectedBrands }))
                    break;
                case 'cheap':
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, _sort: 'price', brand: selectedBrands }))
                    break;
                default:
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, brand: selectedBrands }))
            }

            return;
        }


        switch (currentSortType) {
            case 'rating':
                dispatch(fetchProducts({ q: query, brand: selectedBrands, _sort: 'rating', _order: 'desc', }))
                break;
            case 'expensive':
                dispatch(fetchProducts({ q: query, brand: selectedBrands, _sort: 'price', _order: 'desc', }))
                break;
            case 'cheap':
                dispatch(fetchProducts({ q: query, brand: selectedBrands, _sort: 'price', }))
                break;
            default:
                dispatch(fetchProducts({ q: query, brand: selectedBrands, }))

        }

    }, [currentSortType, currentPage, limit, maxPrice, minPrice, selectedBrands])


    //  



    return (
        <>
            {loading ?
                <Loader />
                :
                <div className={c.devices__list__container}>
                    <SearchHeader searchQuerry={query} count={devices.length} />
                    <SerchedDevices />
                    <div className={c.contant}>
                        <div className={c.content}>
                            {devices?.map((dev) => <DeviceItem handleBacketFn={handleBacket} dispatch={dispatch} device={dev} />)}
                        </div>
                    </div>
                </div>

            }
        </>
    )
}
