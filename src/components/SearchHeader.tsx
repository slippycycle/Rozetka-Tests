import React from 'react'
import c from '../styles/SearchPage.module.scss'

interface SearchHeaderProps {
    count: number
    searchQuerry: string
}

export default function SearchHeader({count,searchQuerry}:SearchHeaderProps) {
  return (
   <div className={c.heder}>
      <h1>{`Was founded ${count} items by querry ${searchQuerry} `}</h1>
   </div>
  )
}
