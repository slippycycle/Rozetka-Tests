import React from 'react'
import { SelectedSubPageContext } from '../context'
import { DeviceI } from '../models/models'
import { SelectedSubPageType } from '../pages/SubPage'
import { handleBacket, makeRender } from '../store/features/Backet.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePage.module.scss'


interface DeviceInfoPanelProps {
    device: DeviceI
    currentSubPage: SelectedSubPageType
}

export default function DeviceInfoPanel({ device, currentSubPage }: DeviceInfoPanelProps) {


    const { currentColor, setCurrentColor } = React.useContext(SelectedSubPageContext)

    const { selected } = React.useContext(SelectedSubPageContext)

    const { reload } = useAppSelector(state => state.backetReducer)

    const parsedBasket = JSON.parse(localStorage.getItem('backet') as string)

    const  [currentBasket,setCurrentBasket] = React.useState<any>([])

   

    React.useEffect(() => {
            if (Array.isArray(parsedBasket)) {
                setCurrentBasket(parsedBasket)
            } else {
                setCurrentBasket([])
            }
    },[,reload])



    const dispatch = useAppDispatch()


    console.log('device info panel render')

    const handleBasketButton = () => {

        if (!Array.isArray(currentBasket)  ) {

            let stertArray = []
            stertArray.push(device.id)
            localStorage.setItem('backet', JSON.stringify(stertArray))

        }
        if (Array.isArray(currentBasket)) {

            if (currentBasket.find((el) => el == device.id)) {
                //already included 
                dispatch(handleBacket())
            }
            else {
                //on success

                let result = currentBasket
                result.push(device.id)
                localStorage.setItem('backet', JSON.stringify(result))
              
                // setActive(currentBcket?.length > 0 ? currentBcket.find((el) => el == device.id): false)
                dispatch(makeRender())

               
            }
        
        

        // setActive(true)
        //currentBcket?.length > 0 ? currentBcket.find((el : string | number) => el == device.id): false ?

        dispatch(makeRender())
       
    }


    }



    return (

        <div className={c.info__panel}>
            <div className={c.info__panel__wrap}>

                {selected == 'All information' ?

                    <div className={c.color__block}>
                        <div className={c.cloror__container__text}>
                            <h3>Color:</h3> <p>{currentColor}</p>
                        </div>



                        <div className={c.colors__container}>
                            {device?.colors ?
                                device.colors.map((col) => <div onClick={() => { setCurrentColor(col) }} className={currentColor == col ? c['color__item__' + col + '__active'] : c['color__item__' + col ]  }></div>)
                                : null
                            }
                        </div>
                    </div>

                    :
                    <div className={c.devcie__intro}>
                        <div className={c.devcie__intro__content}>
                            <div className={c.img_intro_container}>
                                <img alt='device photo' src={device.images[device.colors[0]][0]}></img>
                            </div>
                            <div className={c.text__intro__container}>
                                {device.faceDescription}
                            </div>
                        </div>
                    </div>

                }
                <div className={c.order__price__block}>
                    {device.oldPrice && device.oldPrice > device.price ?
                        <>
                            <h3>{device.oldPrice}</h3>
                            <h2>{device.price}</h2>
                        </>
                        :
                        <h2 className={c.def__price}>{device.price}</h2>

                    }

                    <div className={c.order__buttons}>
                        <button>Buy</button>
                        <button onClick={handleBasketButton} className={currentBasket.includes(device.id)? c.basket__button__active : c.basket__button}>
                            {currentBasket.includes(device.id) ? "In basket" : "Put in basket"}
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </button>
                    </div>
                </div>
                <div className={c.seller_wrap} >
                    <div className={c.seller_block}>
                        <p>Seller: </p><h4>{device.seller}</h4>
                    </div>
                </div>
            </div>

        </div>

    )
}
