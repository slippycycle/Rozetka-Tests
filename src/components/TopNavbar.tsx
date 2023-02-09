import React from 'react'
import { MenuContext } from '../context'
import { handleBacket } from '../store/features/Backet.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Navbar.module.scss'


export default function TopNavbar() {

    console.log('navbar render')



    const dispatch = useAppDispatch()

    function handleBacketVisible() {
        dispatch(handleBacket())

    }

    const menuState = React.useContext(MenuContext)

    const BacketState = useAppSelector(state => state.backetReducer)

    function menuHandle() {
        //close backet 
        if (BacketState.backetActive) {
            dispatch(handleBacket())
        }

        menuState.menuHandle()
    }

    return (
        <>
            <div className={c.top_navbar}>
                <div onClick={menuHandle} className={c.varenya_s_pomidorammi}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button  className={c.backet__button} onClick={handleBacketVisible}>
                    <span className="material-symbols-outlined">
                        shopping_basket
                    </span>
                </button>
            </div>

        </>
    )
}
