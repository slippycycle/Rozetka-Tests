import React from 'react'
import { sortDevicestypes, Types } from '../models/models'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import { getPages } from '../utils/pagination'
import CategoryHeader from './CategoryHeader'
import DeviceContainer from './DeviceContainer'
import Loader from './Loader'
import SortDevicesBar from './SortDevicesBar'


export default  React.memo( function DevicePanel() {


    const takeCurrentType = window.location.pathname.slice(1, 100)

    const dispatch = useAppDispatch()

    const { error, loading, devices, currentSortType, currentPage, limit, maxPrice, minPrice } = useAppSelector((state) => state.productReducer)


    const { selectedBrands } = useAppSelector((state) => state.brandReducer)



    React.useEffect(() => {
        //_sort:'rating',_order:'desc'
        //_sort=rating&_order=desc
        //{ type: 'phone', brand: ['apple','samsung'],_sort:'rating',_order:'desc'}
        //{ type: 'phone', brand: [], _sort: 'rating', _order: 'desc',_page: '1',_limit:3 }
        //http://localhost:3001/products?price_gte=40000&price_lte=90000 //by range

        if (maxPrice !== 200000 || minPrice > 0) {

            switch (currentSortType) {
                case 'rating':
                    dispatch(fetchProducts({price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _sort: 'rating', _order: 'desc', _page: currentPage, _limit: limit }))
                    break;
                case 'expensive':
                    dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice,type: takeCurrentType, brand: selectedBrands, _sort: 'price', _order: 'desc', _page: currentPage, _limit: limit }))
                    break;
                case 'cheap':
                    dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _sort: 'price', _page: currentPage, _limit: limit }))
                    break;
                default:
                    dispatch(fetchProducts({  price_gte: minPrice, price_lte: maxPrice, type: takeCurrentType, brand: selectedBrands, _page: currentPage, _limit: limit }))
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
                    dispatch(fetchProducts({  type: takeCurrentType, brand: selectedBrands, _page: currentPage, _limit: limit }))
            
        }



    }, [selectedBrands, currentSortType, currentPage, limit,maxPrice,minPrice])




console.log(maxPrice,minPrice)



    return (
        <div className={c.wrap}>
            <CategoryHeader brands={selectedBrands} category={takeCurrentType} />
            <SortDevicesBar currentSortType={currentSortType as string} />
            {error ? <h2>{error as string}</h2> : null}
            {loading ? <Loader /> : <DeviceContainer devicesArray={devices} />}
        </div>
    )
})
