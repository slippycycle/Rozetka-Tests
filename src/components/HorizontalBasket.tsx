import React from 'react'
import { handleBasket } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/HorizontalBasket.module.scss'
import HorizontalBasketImageContainer from './HorizontalBasketImage'


export default function HorizontalBasket() {

    const { totalSum } = useAppSelector(state => state.basketReducer)
    const { reload } = useAppSelector(state => state.basketStateSlice)

    const [basket, setBasket] = React.useState([])

    const dispatch = useAppDispatch()

    React.useEffect(() => {

        let current = JSON.parse(localStorage.getItem('basket') as string)

        if (current) {

            setBasket(current.slice(0, 3))

        } else {
            setBasket([])
        }
    }, [totalSum])

    return (
        <>
            {totalSum > 0 ?
                <div className={c.horizontal_basket}>
                    <div className={c.text_container}>
                        <h2>
                            {`In basket ${basket.length} devices`}
                        </h2>
                        <p>
                            {`total sum ${totalSum}`}
                        </p>
                    </div>
                    <div className={c.photo_container}>
                        {
                            basket.map((id: string | number) =>
                                <div key={id} className={c.device_photo_container}>
                                    <HorizontalBasketImageContainer id={id} />
                                </div>)
                        }
                    </div>
                    <div className={c.link_container}>
                        <button className={c.basket_btn}  onClick={() => { dispatch(handleBasket()) }}>
                            Open Basket
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </button>
                        <button className={c.order_btn} >make an order</button>
                    </div>
                </div>

                :

                null


            }
        </>
    )
}
