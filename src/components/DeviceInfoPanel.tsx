import React from 'react'
import { SelectedSubPageContext } from '../context'
import { DeviceI } from '../models/models'
import { SelectedSubPageType } from '../pages/SubPage'
import c from '../styles/DevicePage.module.scss'


interface DeviceInfoPanelProps {
    device: DeviceI
    currentSubPage: SelectedSubPageType
}

export default function DeviceInfoPanel({ device, currentSubPage }: DeviceInfoPanelProps) {


    const { currentColor, setCurrentColor } = React.useContext(SelectedSubPageContext)

    const { selected } = React.useContext(SelectedSubPageContext)


    console.log('device info panel render')

    return (

        <div className={c.info__panel}>
           <div className={c.info__panel__wrap}>

            {selected == 'All information' ?

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

                :
              
                <div className={c.devcie__intro}>
                    <div className={c.img_intro_container}>
                        <img alt='device photo' src={device.images[device.colors[0]][0]}></img>
                    </div>
                    <div className={c.text__intro__container}>
                        {device.faceDescription}
                    </div>
                </div>

            }
            <div className={c.order__price__block}>
                {device.oldPrice && device.oldPrice > device.price ?
                    <>
                        <h3>{device.oldPrice}</h3>
                        <h2>{device.price}</h2>
                    </>
                    :
                    <h2 className={c.def__price}>{device.price}</h2>

                }

                <div className={c.order__butons}>
                    <button>Buy</button>
                    <button className={c.credit__buton}>Buy in credit</button>
                </div>
            </div>
            <div className={c.seller_block}>
                <p>Seller: </p><h4>{device.seller}</h4>
            </div>
           </div>

        </div>

    )
}
