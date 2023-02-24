import React, { useContext } from 'react'
import Swiper from 'swiper'
import { SelectedSubPageContext } from '../context'
import { colors, DeviceI } from '../models/models'
import SubPages from '../pages/SubPage'
import SubPage, { SelectedSubPageType } from '../pages/SubPage'
import c from '../styles/DevicePage.module.scss'
import DeviceInfoPanel from './DeviceInfoPanel'
import DeviceSliderSubPage from './DeviceSliderSubPage'
import DeviceSlider from './DevicSlider'
import SubPagesVariatyList from './SubPagesVariatyList'



interface DevicePageContent {
    device: DeviceI
}


export default function DevicePageContent({ device }: DevicePageContent) {


    const [subPages, setSubPages] = React.useState(['All information', 'Questions', 'characteristics'])

    const [currentSubPage, setCurSubPages] = React.useState<SelectedSubPageType>('All information')

    const [currentColor, setCurrentColor] = React.useState(device?.colors[0])

    const currentImgs = device?.images[currentColor]

    function changeCurrentSubPage(page: SelectedSubPageType) {
        setCurSubPages(page)
    }

    

    console.log('Device page Render')

    return (
        <>
            <SelectedSubPageContext.Provider value={{ selected: currentSubPage, changeCurrentSubPage, currentColor, setCurrentColor }}>
                <SubPagesVariatyList />
                <div className={c.wrap}>
                    <SubPages currentImgs={currentImgs} device={device} />
                    <DeviceInfoPanel device={device} currentSubPage={currentSubPage} />
                </div>
                    
            </SelectedSubPageContext.Provider>
        </>
    )
}
