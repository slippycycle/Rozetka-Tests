import React from 'react'
import { handleBacket } from '../store/features/Backet.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/Navbar.module.scss'


export default function TopNavbar() {

    console.log('navbar render')


   
    const dispatch = useAppDispatch()

    function handleBacketVisible () {
        dispatch(handleBacket())

    }

    return (
        <>
            <div className={c.top_navbar}>
                <div className={c.varenya_s_pomidorammi}>
                    <div className={c.span_conatiner}>
                        <span></span>
                    </div>
                </div>
                <button className={c.backet__button} onClick={handleBacketVisible} >backet</button>
            <div className={c.bottom_navbar_line} ></div>
            </div>

        </>
    )
}
