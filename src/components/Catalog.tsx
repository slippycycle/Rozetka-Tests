import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../consts'
import { MenuContext } from '../context'
import { Types } from '../models/models'
import { addSelectedBrands } from '../store/features/Brands.Slice'
import { setCurrentPage } from '../store/features/Devices.Slice'
import { setMaxRangePrice, setMinRangePrice } from '../store/features/PriceRange'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/Catalog.module.scss'
import Loader from './Loader'


export default function Catalog() {

    const { catalogVisible, setCatalogVisible } = React.useContext(MenuContext)

    const [types, setTypes] = React.useState<Types[] | []>([])

    const [loading, setLoading] = React.useState(true)

    const dispatch = useAppDispatch()

    let navigate = useNavigate()

   


    async function fetchAllTypes() {

        try {
            const response = await axios.get<Types[]>(`${SERVER_URL}types?`)
            setTypes(response.data)

        } catch (e) {

        }
    }

    function redirectHandle(tp: Types) {
        if (window.location.pathname !== `/${tp.type}`) {
            navigate(`/${tp.type}`)
            //reset selected brands in case we change category page  
            window.location.reload(); 
           console.log( window.location.pathname,'LOACTION');
        } else {
            setCatalogVisible(false)
        }
    }

    React.useEffect(() => {
        fetchAllTypes().then(res => setLoading(false))

    }, [])



    return (
        <>
            {catalogVisible ?
                <div className={c.wrap}>


                    {loading ?
                        <Loader />
                        :
                        <div className={c.catalog}>
                            <button onClick={() => {setCatalogVisible(false) }} className={c.close_btn}>
                                <span  className="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <ul className={c.types_list} >
                                {types.map((t: Types) =>
                                    <li>
                                        <div onClick={() => redirectHandle(t) } className={c.image_container}>
                                            <img  src={t.image} ></img>
                                        </div>
                                        <button onClick={() => redirectHandle(t) } >{t.fullTypeName}</button>
                                    </li>
                                )}
                            </ul>
                        </div>

                    }
                </div>
                :
                null

            }
        </>
    )
}
