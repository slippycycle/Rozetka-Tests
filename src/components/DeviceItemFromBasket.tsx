import axios, { Axios, AxiosError } from 'axios'
import React from 'react'
import { fetchDevice } from '../API/fetchDevice'
import { DeviceI, DeviceId } from '../models/models'
import SmallDeviceItem from './SmallDeviceItem'

interface DeviceItemFromBacketProps {
    id: string | number
}

export function DeviceItemFromBasket({ id }: DeviceItemFromBacketProps) {

    const [loading, setLoading] = React.useState<boolean>(true)
    const [device, setDevice] = React.useState<DeviceI | null>(null)
    const [error, setError] = React.useState<string | null>(null)



    React.useEffect(() => {
        setLoading(true)

        fetchDevice(id).then((res) => {

            const fetchedDevice = res as DeviceI

            if (fetchedDevice.faceDescription && fetchedDevice.colors) {
                setDevice(res as DeviceI)
            } else {
                setError('Error')
            }
            
            setLoading(false)
        }


        ).catch(err => setError(err))

    }, [])

    return (
        <>
            {loading ?
                <h2>Loading</h2>
                :
                <>
                    {error ?
                        <p>{error}</p>
                        :
                        <SmallDeviceItem device={device as DeviceI} />

                    }
                </>
            }
        </>
    )
}