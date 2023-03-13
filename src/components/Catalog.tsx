import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../consts'
import { MenuContext } from '../context'
import { Types } from '../models/models'
import { fetchTypes } from '../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Catalog.module.scss'
import Loader from './Loader'


export default function Catalog() {

    const { catalogVisible, setCatalogVisible } = React.useContext(MenuContext)
    const { types } = useAppSelector(state => state.typeReducer)
    const [loading, setLoading] = React.useState(true)

    const dispatch = useAppDispatch()

    let navigate = useNavigate()

    

    console.log('MODAL CATALOG RENDER')


    async function fetchAllTypes() {

        try {
            const response = await axios.get<Types[]>(`${SERVER_URL}types?`)
            dispatch(fetchTypes())

        } catch (e) {

        }
    }

    function redirectHandle(tp: Types) {
        if (window.location.pathname !== `/${tp.type}`) {
            navigate(`/${tp.type}`)
            //reset selected brands in case we change category page  
            window.location.reload();
            console.log(window.location.pathname, 'LOACTION');
        } else {
            setCatalogVisible(false)
        }
    }

    React.useEffect(() => {
        if ( types.length < 1 ) {
            fetchAllTypes().then(res => setLoading(false))
        } else {
            setLoading(false)
        }

    }, [])



    return (
        <>
            {catalogVisible ?
                <div className={c.wrap}>


                    {loading ?
                        <Loader />
                        :
                        <div className={c.catalog}>
                            <button onClick={() => { setCatalogVisible(false) }} className={c.close_btn}>
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <ul className={c.types_list} >
                                {types.map((t: Types) =>
                                    <li>
                                        <div className={c.image_container}>
                                            <img src={t.image} ></img>
                                        </div>
                                        <button onClick={() => redirectHandle(t)} >{t.fullTypeName}</button>
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
