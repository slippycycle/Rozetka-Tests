import React from 'react'
import { MenuContext } from '../context'
import { fetchTypes } from '../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Menu.module.scss'
import MenuCategoryContentComponents from './MenuCategoryContentComponents'

export default function Menu() {

    const [active, setActive] = React.useState<boolean>(false)

    const menuState = React.useContext(MenuContext)

    console.log('menu active')

    const { types, loading, error } = useAppSelector(state => state.typeReducer)

    const menuRef = React.useRef(null)



    return (

        <div ref={menuRef} onClick={
            (e) => {
                e.preventDefault()
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
                console.log('closed')
            }
        } className={menuState.active ? c.menu__active : c.menu}>
            <div className={c.menu_content}>
                <button className={c.close__button} onClick={menuState.menuHandle}>
                    <span onClick={menuState.menuHandle} className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className={c.menu__header__block}>
                    <h2>SKRIX Devices</h2>
                </div>


                <div className={c.menu__category}>
                    <span className="material-symbols-outlined">
                        category
                    </span>
                    Category
                    <div onClick={() => setActive(prev => !prev)} className={c.arrow__container}>
                        <span className="material-symbols-outlined">
                            {active ? 'expand_less' : 'expand_more'}
                        </span>
                    </div>
                </div>

                <MenuCategoryContentComponents types={types} loading={loading} error={error} active={active} />


                <ul className={c.ul_links}>
                    <li>
                        <span className="material-symbols-outlined">
                            home
                        </span>
                        <a>
                            HOME
                        </a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            support_agent
                        </span>
                        <a>
                            SUPPORT
                        </a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <a>
                            BASKET
                        </a>


                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            send
                        </span>
                        <a>
                            TELEGRAM BOT
                        </a>
                    </li>
                </ul>


            </div>
        </div>
    )
}