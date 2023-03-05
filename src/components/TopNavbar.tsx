import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../context'
import c from '../styles/Navbar.module.scss'
import MenuHandleButton from './MenuHandleButton'
import NavbarInputContainer from './NavbarInputContainer'
import BasketTopItem from './TopBasketItem'



export default function TopNavbar() {

    console.log('navbar render')
    const containerRef = React.useRef<HTMLDivElement>(null)

    return (

        <div ref={containerRef} className={c.menu__container}>
            <div className={c.top_navbar}>
                <MenuHandleButton />
                <NavbarInputContainer />
                <BasketTopItem />
            </div>
        </div>


    )
}
