import React, { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
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



    const [value, setValue] = React.useState<string>('')

    let navigate = useNavigate()

    function handleKeyDown(event : React.KeyboardEvent<HTMLInputElement>) {

        if (event.key === 'Enter') {

            navigate(`/search/${value.replace(/ /g,'').toLowerCase()}`)
            window.location.reload();
        }
    }



    function navigateBySearchItem() {

        navigate(`/search/${value}`)
    }

    return (
        <>

            <div className={c.top_navbar}>
                <div onClick={menuHandle} className={c.varenya_s_pomidorammi}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={c.search__container}>
                    <input type='text' onKeyDown={handleKeyDown} onChange={(e) => { setValue(e.target.value) }} className={c.search_input} placeholder='i am looking for...'></input>
                    <button onClick={navigateBySearchItem} className={c.find__button}>Find</button>
                </div>

                <button className={c.backet__button} onClick={handleBacketVisible}>
                    <span className="material-symbols-outlined">
                        shopping_basket
                    </span>
                </button>
             
            </div>

        </>
    )
}
