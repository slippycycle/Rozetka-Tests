import React, { useContext } from 'react'
import { SelectedSubPageContext } from '../context'
import c from '../styles/DevicePage.module.scss'

export default  React.memo( function SubPagesVariatyList() {
   
   console.log('sub page list render ')

   const {changeCurrentSubPage} = useContext(SelectedSubPageContext)

    return (
        <div className={c.subpages_list_container}>
            <ul className={c.subpages_variaty_list}>
                <li onClick={() => changeCurrentSubPage('All information')}>All information</li>
                <li onClick={() => changeCurrentSubPage('characteristics')}>characteristics</li>
                <li onClick={() => changeCurrentSubPage('Questions')} >Questions</li>
            </ul>
        </div>
    )
})
