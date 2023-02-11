import axios from 'axios'
import React from 'react'
import { DeviceI } from '../models/models'
import { deleteDevice, pushDevice } from '../store/features/Backet.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/Backet.module.scss'

interface DeviceItemFromBacketProps {
    id: string | number
}

export function DeviceItemFromBacket({ id }: DeviceItemFromBacketProps) {



    const [dev, setDev] = React.useState<DeviceI | any>({})
    const [error, setError] = React.useState(false)

    function removeDevice() {

        //remove id from locla storage and object in backet state by current id
        let parsedbacket = JSON.parse(localStorage.getItem('backet') as string)

        let arrayWithoutCurrentDev = parsedbacket.filter((devId: string | number) => devId !== id)

        localStorage.setItem('backet', JSON.stringify(arrayWithoutCurrentDev))

        dispatch(deleteDevice(id))
        
        setDev('deleted')
    }

    const dispatch = useAppDispatch()


    async function fethDevice() {
        const responose = await axios.get(`http://localhost:3001/products?id=${id}`)

        return await responose.data[0]
    }

    

    React.useEffect(() => {
        fethDevice().then(data =>  setDev(data)).catch(er => setError(true))
        fethDevice().then(data => dispatch(pushDevice(data)) )
    }, [])


    return (
        <>

            {error ?
                <h2>Error</h2>
                :
                 <div className={c.device__item__container}>
                    <img src={ dev.images? dev.images[0]: 'xxxxx'  }/>
                    <h2>{dev?.name}</h2>
                    <button onClick={removeDevice}>delete</button>
                </div>
            }

        </>
    )
}