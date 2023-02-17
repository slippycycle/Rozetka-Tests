import React from 'react'
import c from '../styles/DevicePage.module.scss'

export default function SubPagesVariatyList() {
    return (
        <div className={c.subpages_list_container}>
            <ul className={c.subpages_variaty_list}>
                <li>All about product</li>
                <li>characteristics</li>
                <li>Questions</li>
            </ul>
        </div>
    )
}
