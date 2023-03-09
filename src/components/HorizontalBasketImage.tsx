import axios from "axios"
import React from "react"
import { DeviceI } from "../models/models"
import c from '../styles/HorizontalBasket.module.scss'

interface HorizontalBasketImageContainerProps {
    id: string | number
}
export default function HorizontalBasketImageContainer({ id }: HorizontalBasketImageContainerProps) {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [device, setDevice] = React.useState<DeviceI>()


    async function fetchDevice() {
        const response = await axios.get(`http://localhost:3001/products?id=${id}`)

        const result = (response.data[0] as DeviceI)

        return result
    }

    React.useEffect(() => {
        setLoading(true)
        fetchDevice().then(res => setDevice(res)).then(res => setLoading(false))

    }, [])




    return (
        <>
            {loading ?
                <h2>Loading</h2>
                :
                    <img src={device?  device.images[device.colors[0]][0] : 'Device not found'} ></img>
            }
        </>
    )
}

