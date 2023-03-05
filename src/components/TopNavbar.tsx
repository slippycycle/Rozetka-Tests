import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../context'
import c from '../styles/Navbar.module.scss'
import MenuHandleButton from './MenuHandleButton'
import BasketTopItem from './TopBasketItem'



export default function TopNavbar() {


    console.log('navbar render')

    const containerRef = React.useRef<HTMLDivElement>(null)
    const [value, setValue] = React.useState<string>('')

    let navigate = useNavigate()


   
    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

        if (event.key === 'Enter') {

            navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')} `)
            window.location.reload();
        }
    }

    function navigateBySearchItem() {

        navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')}`)
        window.location.reload();
    }






    return (

        <div ref={containerRef} className={c.menu__container}>

            <div className={c.top_navbar}>


                <MenuHandleButton />

                <div className={c.search__container}>
                    <input type='text' onKeyDown={handleKeyDown} onChange={(e) => { setValue(e.target.value) }} className={c.search_input} placeholder='i am looking for...'></input>
                    <button onClick={navigateBySearchItem} className={c.find__button}>Find</button>
                </div>
                <BasketTopItem />
            </div>
        </div>


    )
}
