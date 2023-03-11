import { color } from '@mui/system'
import React from 'react'
import { fetchDevice } from '../API/fetchDevice'
import { DeviceI, DeviceId } from '../models/models'
import { ModifiedDeviceItem } from '../store/features/BasketDevices'
import c from '../styles/CheckoutListDeviceItem.module.scss'

interface CheckoutListDeviceItemProps {
    device : ModifiedDeviceItem
}

export default function CheckoutListDeviceItem({ device }: CheckoutListDeviceItemProps) {

   
   const [fisrtImageUrl, setFirstmImgUrl] = React.useState('')

    console.log(device,'INNNER LIST DEVICE')


    return (
        <>
            {
                <div className={c.item}>
                    <div className={c.image_container}>
                        <img src={  device.images[device.color][0] }></img>
                    </div>
                    <div className={c.body}>
                        <h2>{device?.faceDescription}</h2>
                        <div className={c.number}>
                            <h3>number</h3>
                            <p>{device.count ? device.count : '1'}</p>
                        </div>
                        <div className={c.price}>
                            <h3>price</h3>
                            {device.oldPrice > device.price ?
                                <>

                                    <p className={c.old_prc}>{device?.oldPrice}</p>
                                    <p className={c.discount_price}>{device.price}</p>
                                </>
                                :

                                <p>{device.price}</p>




                            }
                        </div>
                        <div className={c.sum}>
                            <h3>sum</h3>
                            {device.count ?
                                <p>{device?.price * device.count}</p>
                                :
                                <p>{device.price * 1}</p>
                            }

                        </div>
                    </div>
                </div>
            }
        </>
    )

}
