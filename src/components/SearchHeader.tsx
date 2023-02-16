import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/SearchPage.module.scss'
import SortDevicesBar from './SortDevicesBar'

interface SearchHeaderProps {
    searchQuerry: string
}

export default function SearchHeader({searchQuerry}:SearchHeaderProps) {
 
  const {currentSortType} = useAppSelector(state => state.productReducer)

  return (
   <div className={c.header}>
      <h1>{`"${searchQuerry}"`}</h1>
      <SortDevicesBar currentSortType={currentSortType as string} />
   </div>
  )
}
