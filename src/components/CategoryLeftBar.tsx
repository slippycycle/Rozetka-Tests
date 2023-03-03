import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/HomePage.module.scss'
import Loader from './Loader'
import TypesComponent from './TypesComponent'
import { fetchTypes } from '../store/features/Types.Slice'
import { Types } from '../models/models'

interface CategoryLeftBar {
  visible: boolean
  handleCategory: React.Dispatch<React.SetStateAction<boolean>>
}



export default React.memo(function CategoryLeftBar({ visible,handleCategory }: CategoryLeftBar) {

  const { types, loading, error } = useAppSelector(state => state.typeReducer)


  const dispatch = useAppDispatch()

  //fetching types
  React.useEffect(() => {
    dispatch(fetchTypes())

  }, [])

  console.log('render left types bar')

  return (
    <>
      <div className={c.category_block}>
        <div className={c.category}>

          {loading ?
            <Loader />
            :
            <>
              {error ?
                <p>{error}</p>
                :
                <TypesComponent typesArray={(types as Types[])} />

              }
            </>
          }
        </div>

      </div>
   {
        
        <div className={visible? c.category_mobile_active :c.category_mobile}>
        <div className={c.category}>

           <div onClick={() => {handleCategory(prev => !prev)}} className={c.close_btn}>X</div>
          {loading ?
            <Loader />
            :
            <>
              {error ?
                <p>{error}</p>
                :
                <TypesComponent typesArray={(types as Types[])} />

              }
            </>
          }
        </div>

      </div>
     

     }

    </>


  )
})
