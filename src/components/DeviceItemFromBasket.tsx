import axios, { Axios, AxiosError } from 'axios'
import React from 'react'
import { DeviceI } from '../models/models'
import SmallDeviceItem from './SmallDeviceItem'

interface DeviceItemFromBacketProps {
    id: string | number
}

export function DeviceItemFromBasket({ id }: DeviceItemFromBacketProps) {

    const [loading, setLoading] = React.useState<boolean>(true)
    const [device, setDevice] = React.useState<DeviceI | null>(null)
    const [error,setError] = React.useState<string | null>(null)
    
   
 
    async function fetchDevice() {
      
        try {
            const response = await axios.get(`http://localhost:3001/products?id=${id}`)
            const result = (response.data[0] as DeviceI )
            setDevice( result )
        } 
        catch (e) {
            const error = e as AxiosError;
            setError(error.message? error.message : 'Error')   
        }

        

    }

    React.useEffect(() => {
        setLoading(true)
        fetchDevice().then( res => setLoading(false))

    }, [])

    return (
        <>
            {loading ?
                    <h2>Loading</h2>
                    :
                    <>      
                    {error?
                        <p>{error}</p>
                         :
                        <SmallDeviceItem device={device as DeviceI} />
                    
                    }
                    </>
            }
        </> 
    )
}