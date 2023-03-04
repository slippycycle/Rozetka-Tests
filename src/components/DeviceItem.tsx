import { render } from '@testing-library/react'
import React, { MutableRefObject, SyntheticEvent, useCallback, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DeviceI } from '../models/models'
import { handleBasket, makeRender } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AppDispatch } from '../store/store'

import c from '../styles/DeviceItem.module.scss'

interface DeviceItemProps {
    device: DeviceI,
    dispatch: AppDispatch
    handleBacketFn: Function
}

export default function DeviceItem({ device, dispatch, handleBacketFn }: DeviceItemProps) {


    let navigate = useNavigate()

    let currentBcket = JSON.parse(localStorage.getItem('basket') as string)

    const { devices, devicesId } = useAppSelector(state => state.basketReducer)

    const { reload } = useAppSelector(state => state.basketReducer)


    console.log(currentBcket)

    function handleDevicebacket() {

        let currentBcket = JSON.parse(localStorage.getItem('basket') as string)



        if (!Array.isArray(currentBcket)) {

            let stertArray = []
            stertArray.push(device.id)
            localStorage.setItem('basket', JSON.stringify(stertArray))

        }
        if (Array.isArray(currentBcket)) {

            if (currentBcket.find((el) => el == device.id)) {
                //already included 
                dispatch(handleBasket())
            }
            else {
                //on success

                let result = currentBcket
                result.push(device.id)
                localStorage.setItem('basket', JSON.stringify(result))
                console.log(devicesId)
                // setActive(currentBcket?.length > 0 ? currentBcket.find((el) => el == device.id): false)
                dispatch(makeRender())


            }

        }

        // setActive(true)
        //currentBcket?.length > 0 ? currentBcket.find((el : string | number) => el == device.id): false ?

        dispatch(makeRender())

    }



    function useHover<T>(): [MutableRefObject<T>, boolean] {
        const [value, setValue] = useState<boolean>(false);
        const ref: any = React.useRef<T | null>(null);
        const handleMouseOver = (): void => setValue(true);
        const handleMouseOut = (): void => setValue(false);
        React.useEffect(
            () => {
                const node: any = ref.current;
                if (node) {
                    node.addEventListener("mouseover", handleMouseOver);
                    node.addEventListener("mouseout", handleMouseOut);
                    return () => {
                        node.removeEventListener("mouseover", handleMouseOver);
                        node.removeEventListener("mouseout", handleMouseOut);
                    };
                }
            },
            [ref.current] // Recall only if ref changes
        );
        return [ref, value];
    }




    const [hoverRef, isHovered] = useHover<HTMLDivElement>();




    console.log(isHovered, device)


    return (
        <div ref={hoverRef} className={isHovered ? c.device_item_hovered : c.device_item} >
            {device.oldPrice > device.price ?
                <div className={c.discount_alert}>
                    DISCOUNT
                </div>
                :
                null
            }
            <div className={c.image_container} onClick={() => { navigate(`/${device.type}/${device.id}`) }}>
                <img alt={device.faceDescription} src={isHovered? device.images[device.colors[0]][0] :  device.images[device.colors[0]][1]  } />
            </div>

            <div className={c.device_item_info_block}>
                <ul className={c.ul_colors_list} >
                    {device?.colors ?
                        device.colors.map((col) => <li key={col} className={c['color__item__' + col]}></li>)
                        : null
                    }
                </ul>
                <div className={c.device__text__block}>
                    <p className={c.name_header}>
                        {device.faceDescription?.length > 50 ? device.faceDescription.slice(0, 50) + '...' : device?.faceDescription}
                    </p>
                </div>


                <div className={c.deivce__item__button__block}>
                    <div className={c.price_block}>
                        {
                            device.oldPrice > device.price ?
                                <h2 className={c.discount_font}>
                                    <h4>{device.oldPrice}</h4>
                                    {device.price}
                                </h2>
                                :
                                <h2>

                                    {device.price}
                                </h2>
                        }
                    </div>
                    {
                        currentBcket.includes(device.id) ?

                            <div className={c.basket_included}>
                                <span onClick={handleDevicebacket} className="material-symbols-outlined">
                                    shopping_cart_checkout
                                </span>
                            </div>
                            :
                            <span onClick={handleDevicebacket} className="material-symbols-outlined">
                                shopping_cart
                            </span>

                    }
                </div>
            </div>
            {isHovered ?
                <div className={c.more_info}>
                    <p>
                        {device.description.slice(0, 250)}
                    </p>
                </div>
                :
                null

            }
        </div>
    )
}

