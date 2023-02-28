import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DeviceI } from '../models/models'
import { addToTotalSum, deleteDeviceById, handleBasket, makeRender, pushDevice, setDevicesFromBasket, setDevicesIdFromBasket } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SmallDeviceItem.module.scss'
import CountInput from './CountInput'

interface SmallDeviceItemProps {
    device: DeviceI
}

export default function SmallDeviceItem({ device }: SmallDeviceItemProps) {
    const [number, setNumber] = React.useState<number>(1)

    const dispatch = useAppDispatch()

    const { devices } = useAppSelector(state => state.basketReducer)



    function deleteHandleBacket() {
        let takeCurrentBasket = JSON.parse(localStorage.getItem('basket') as string)

        let result = takeCurrentBasket.filter((devId: string | number) => devId !== device.id)

        localStorage.setItem('basket', JSON.stringify(result))

        dispatch(setDevicesIdFromBasket(result))

        // (number - 1) as we already have price copy, it was setted by useEffect in current component
        let totalSumFromDeleteDevice =  device.price * (number - 1)

        console.log(totalSumFromDeleteDevice,'AAAAA')

        dispatch(addToTotalSum( -totalSumFromDeleteDevice ) )

        dispatch(makeRender())

    




    }

    const currentColor = device.colors[0]
    const firstmImgUrl = device.images[currentColor][0]

    const [moreVisible, setMoreVisible] = React.useState<boolean>(false)


    let navigate = useNavigate()

    function handleCLikDevice() {

        if (window.location.pathname.replaceAll(device.type, '').replaceAll('/', '') == device.id) {
            dispatch(handleBasket())
            return;
        }

        navigate(`/${device.type}/${device.id}`)
        window.location.reload()

    }


    React.useEffect(() => {
        dispatch(addToTotalSum(device.price))
        return () => {
            dispatch(addToTotalSum(-device.price))
        }
    }, [])

    function handleNumber(polus: boolean) {

        if (polus) {
            setNumber(prev => prev + 1)
            dispatch(addToTotalSum(+ device.price))


        }
        else {

            if (number > 1) {
                setNumber(prev => prev - 1)
                dispatch(addToTotalSum(-device.price))
            }
        }

    }






    return (
        <div className={c.item_wrap}>
            <div className={c.img__container} onClick={handleCLikDevice}>
                <img alt={`${device.name} photo`} src={firstmImgUrl}></img>
            </div>
            <div className={c.body__content}>

                <div className={c.info__container}>
                    <p onClick={handleCLikDevice} >{device.faceDescription}</p>
                    <h2>{device.price * number}</h2>
                </div>



                <div className={c.count__container}>
                    <div className={c.count}>
                        <button onClick={() => { handleNumber(false) }}>
                            <p>-</p>
                        </button>
                        <CountInput defaultVal={number} ></CountInput>
                        <button onClick={() => { handleNumber(true) }}>
                            <p >+</p>
                        </button>
                    </div>
                </div>

            </div>


            <div className={c.more__block}>

                <span onClick={() => setMoreVisible(true)} className="material-symbols-outlined">
                    more_vert
                </span>
            </div>
            {moreVisible ?
                <div className={c.more_content}>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                    <button onClick={deleteHandleBacket}>delete</button>
                </div>
                :
                null
            }
        </div>
    )
}

