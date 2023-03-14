import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../consts'
import { MenuContext } from '../../context'
import { Types } from '../../models/models'
import { fetchTypes } from '../../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import c from './styles/Catalog.module.scss'
import Loader from '../Loader'


export default function Catalog() {

    const { catalogVisible, setCatalogVisible } = React.useContext(MenuContext)
    const { types } = useAppSelector(state => state.typeReducer)
    const [loading, setLoading] = React.useState(true)

    const dispatch = useAppDispatch()





    console.log('MODAL CATALOG RENDER')


    async function fetchAllTypes() {

        try {
            const response = await axios.get<Types[]>(`${SERVER_URL}types?`)
            dispatch(fetchTypes())

        } catch (e) {

        }
    }


    React.useEffect(() => {
        if (types.length < 1) {
            fetchAllTypes().then(res => setLoading(false))
        } else {
            setLoading(false)
        }

    }, [])

    function handleCategoryVisible(e: React.MouseEvent<HTMLElement>) {
        if ((e.target as HTMLTextAreaElement).className === e.currentTarget.className) { setCatalogVisible(false) }
    }

    return (
        <>
            {catalogVisible ?
                <div onClick={(e) => handleCategoryVisible(e)} className={c.wrap}>


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
                                        <button>
                                            <Link onClick={() => setCatalogVisible(false)} to={t.type}>
                                                {t.fullTypeName}
                                            </Link>

                                        </button>
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
