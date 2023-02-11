import React from 'react'
import { MenuContext } from '../context'
import { Types } from '../models/models'
import { fetchTypes } from '../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Menu.module.scss'

export default function Menu() {

    const [active, setActive] = React.useState<boolean>(false)

    const menuState = React.useContext(MenuContext)

    console.log('menu active')

    const { types, loading, error } = useAppSelector(state => state.typeReducer)

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchTypes())
    }, [])

    return (

        <div className={menuState.active ? c.menu__active : c.menu}>
            <div className={c.menu_content}>
                <button className={c.close__button} onClick={menuState.menuHandle}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className={c.menu__header__block}>
                    <h2>SRKIX DEVICES</h2>
                </div>
                <div className={c.menu__baner}>
                    <span className="material-symbols-outlined">
                        category
                    </span>
                    Category
                    <div onClick={() => setActive(prev => !prev)} className={c.arrow__container}>
                        <span className="material-symbols-outlined">
                            {active ? 'expand_more' : 'expand_less'}
                        </span>
                    </div>
                </div>
                <div className={active ? c.category__content : c.category__content__active}>
                    {error && !loading ?
                        <p>{error ? error : loading}</p>
                        :
                        <ul className={c.category_list_container}>
                          {types.map((tp : Types) => <li>{tp.fullTypeName}</li>)}
                        </ul>
                    }
                </div>
                <ul className={c.ul_list}>
                    <li>HOME <span className="material-symbols-outlined">
                        home
                    </span>
                    </li>
                    <li>SUPPORT</li>
                    <li>BASKET</li>
                    <li>TELEGRAM BOT</li>
                </ul>


            </div>
        </div>
    )
}