import React from 'react'
import Backet from '../components/Backet'
import ComponentsCategory from '../components/ComponentsCategory'
import DevicesComponents from '../components/ComponentsCategory'
import LeftMobileFilter from '../components/LeftMobileFilter'
import { MobileSortActive } from '../context'

export default function SelectedDevicesPage() {


    const [active, setActive] = React.useState(false)

    function handleMenuState() {
        setActive(active => !active)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center', overflow: 'hidden', height: '92vh' }}>

            <MobileSortActive.Provider value={{ active, handleMenuState}} >
                <ComponentsCategory />
                <LeftMobileFilter />
            </MobileSortActive.Provider>

        </div>
    )
}
