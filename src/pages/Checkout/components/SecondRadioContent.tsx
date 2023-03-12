import React from 'react'
import c from '../styles/DeliveryContent.module.scss'
import AvailabelPickPoinstContent from './AvailabelPickPoinstContent'

export default function SecondRadioContent() {
    return (
        <>
            <label className={c.radio_container}>
                <p>
                    Pickup from Nova Poshta
                </p>
                <input type="radio" name="radio" />
                <span className={c.radio_checkmark}></span>
            </label>
            <AvailabelPickPoinstContent pointChain={'novaposhtapoints'} />
        </>
    )
}
