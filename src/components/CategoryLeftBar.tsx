import React from 'react'
import { typeSlice } from '../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/HomePage.module.scss'
import Loader from './Loader'
import TypesComponent from './TypesComponent'
import { setTypes } from '../store/features/Types.Slice'
import { fetchTypes } from '../store/features/Types.Slice'
import { Types } from '../models/models'

export default React.memo(function CategoryLeftBar() {

  const { types, loading, error } = useAppSelector(state => state.typeReducer)

 
  const dispatch = useAppDispatch()

  //fetching types
  React.useEffect(() => {
    dispatch(fetchTypes())
    console.log(types)
  }, [])

  console.log('render left types bar')

  return (
    <div className={c.container}>
      {loading ? <Loader /> : null}
      {error? <p>{error}</p> : <TypesComponent typesArray={(types as Types[])} />}
    </div>
  )
})
