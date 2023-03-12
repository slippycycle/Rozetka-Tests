import React from 'react'
import AvailabelPickPoinstContent from './AvailabelPickPoinstContent'
import c from '../styles/DeliveryContent.module.scss'


export default function FirstRadioContent() {
    return (
        <>
            <label className={c.radio_container}>
                <p>
                    Pickup from Dady Raffic Drug chain
                </p>
                <input type="radio" name="radio" />
                <span className={c.radio_checkmark}></span>
            </label>
            <AvailabelPickPoinstContent pointChain={'daddyraficpoints'} />
        </>
    )
}
