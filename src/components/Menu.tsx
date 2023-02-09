import React from 'react'
import { MenuContext } from '../context'
import c from '../styles/Menu.module.scss'

export default function Menu() {


    const menuState = React.useContext(MenuContext)

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