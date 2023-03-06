import React from 'react'
import { fetchDevice } from '../API/fetchDevice'
import { DeviceI, DeviceId } from '../models/models'
import { pushViewedDevice } from '../store/features/ViewedDevices.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/ViewedeDeviceItem.module.scss'

interface ViewedeDeviceItem {
    id: DeviceId
}



export default function ViewedeDeviceItem({ id }: ViewedeDeviceItem) {

    const [device, setDevice] = React.useState<DeviceI | null>()
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)

    const [faceImage, setFaceImage] = React.useState<string>('')

    const dispatch = useAppDispatch()



    React.useEffect(() => {

        fetchDevice(id).then(res => {

            let device: DeviceI = res as DeviceI

            if (device.id) {
                setDevice(res as DeviceI)
                setLoading(false)

                if (device.images && device.id == id && device.colors && device.price) {
                    let imageUrl: string = device.images[device.colors[0]][0] as string
                    setFaceImage(imageUrl)
                    dispatch( pushViewedDevice( device ) )
                    

                }
            } else {
                setError('error')
            }

        }).catch(err => setError(err))

    }, [])



    return (
        <>
            {loading ?
                <h2>Loading</h2>
                :
                <>
                    {error ?
                        <h2>{error}</h2>
                        :
                        <div className={c.cart}>
                            <label>
                                open
                            </label>
                            <div className={c.image_container}>
                                <img alt={`photo ${device?.faceDescription}`} src={faceImage} />
                            </div>
                            <div className={c.text_wrap}>
                                <p>
                                    {device?.faceDescription}
                                </p>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}
