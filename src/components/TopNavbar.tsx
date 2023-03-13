import React from 'react'
import c from '../styles/Navbar.module.scss'
import MenuHandleButton from './MenuHandleButton'
import NavbarInputContainer from './NavbarInputContainer'
import BasketTopItem from './TopBasketItem'



export default function TopNavbar() {

    console.log('NAVBAR render')
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
