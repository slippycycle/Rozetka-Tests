import React from 'react'
import { fetchDevice } from '../API/fetchDevice'
import { DeviceI, DeviceId } from '../models/models'
import c from '../styles/CheckoutListDeviceItem.module.scss'

interface CheckoutListDeviceItemProps {
    innerId: string
    count?: number
    color?: string
    id: DeviceId
}

export default function CheckoutListDeviceItem({ innerId, id, count, color }: CheckoutListDeviceItemProps) {

    const [dev, setDev] = React.useState<DeviceI>()
    const [loading, setLoading] = React.useState<boolean>(true)


    const [fisrtImageUrl, setFirstmImgUrl] = React.useState('')

    React.useEffect(() => {

        fetchDevice(id).then((res) => {
            if ((res as DeviceI).images) {
                setDev(res as DeviceI)
                setFirstmImgUrl((res as DeviceI).images[color as string][0])
                console.log(dev?.price);
            }
            setLoading(false)
        })

    }, [])


    return (
        <>
            {loading ?
                <p></p>
                :
                <div className={c.item}>
                    <div className={c.image_container}>
                        <img src={fisrtImageUrl}></img>
                    </div>
                    <div className={c.body}>
                        <h2>{dev?.faceDescription}</h2>
                        <div className={c.number}>
                            <h3>number</h3>
                            <p>{count ? count : '1'}</p>
                        </div>
                        <div className={c.price}>
                            <h3>price</h3>
                            {dev.oldPrice > dev.price ?
                                <>
                                    <p className={c.old_prc}>{dev?.oldPrice}</p>
                                    <p className={c.discount_price}>{dev.price}</p>
                                </>
                                :
                                <p>{dev.price}</p>

                            }
                        </div>
                        <div className={c.sum}>
                            <h3>sum</h3>
                            {count ?
                                <p>{dev?.price * count}</p>
                                :
                                <p>{dev.price * 1}</p>
                            }

                        </div>
                    </div>
                </div>
            }
        </>
    )

}
