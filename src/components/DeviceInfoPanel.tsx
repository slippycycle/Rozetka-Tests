import React from 'react'
import { SelectedSubPageContext } from '../context'
import { DeviceI } from '../models/models'
import { SelectedSubPageType } from '../pages/SubPage'
import c from '../styles/DevicePage.module.scss'

interface DeviceInfoPanelProps {    
    device: DeviceI
    currentSubPage: SelectedSubPageType
}

export default  function DeviceInfoPanel({device,currentSubPage}:DeviceInfoPanelProps) {
   
    console.log('device info panel render')

    const {currentColor, setCurrentColor} = React.useContext(SelectedSubPageContext)

    return (

        <div className={c.info__panel}>

            <div className={c.color__block}>
                <div className={c.cloror__container__text}>
                    <h3>Color:</h3> <p>{currentColor}</p>
                </div>
                <div className={c.colors__container}>
                    {device?.colors ?
                        device.colors.map((col) => <div onClick={() => { setCurrentColor(col) }} className={c['color__item__' + col]}></div>)
                        : null
                    }
                </div>
            </div>

            <div className={c.order__price__block}>
                <h2>{device.price}</h2>
                <div className={c.order__butons}>
                     <button>Buy</button>
                     <button className={c.credit__buton}>Buy in credit</button>
                </div>
            </div>

        </div>

  )
}
