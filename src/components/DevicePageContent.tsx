import React from 'react'
import Swiper from 'swiper'
import { colors, DeviceI } from '../models/models'
import c from '../styles/DevicePage.module.scss'
import DeviceSliderSubPage from './DeviceSliderSubPage'
import DeviceSlider from './Slider'
import SubPagesVariatyList from './SubPagesVariatyList'



interface DevicePageContent {
    device: DeviceI
}


export default function DevicePageContent({ device }: DevicePageContent) {


    const [currentColor, setCurrentColor] = React.useState(device?.colors[0])

    const take = device?.colors[0]

    const currentImgs = device?.images[currentColor]

    console.log(currentColor)

    return (
        <>

            <SubPagesVariatyList />
            <div className={c.wrap}>
                <DeviceSliderSubPage src={currentImgs} />

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
                    </div>
                </div>
            </div>
        </>
    )
}
