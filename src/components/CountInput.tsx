import React, { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'
import { CountContext } from '../context';
import { addToTotalSum, makeRender, removeFromTotalSum, setTotalSum } from '../store/features/Basket.Slice';
import { useAppDispatch } from '../store/hooks';
import c from '../styles/CountInput.module.scss'

interface CountInputProps {
    defaultVal: number | null
    changeValueState: Dispatch<SetStateAction<number>>
    devicePrice: number
}

export default function CountInput({ defaultVal, changeValueState, devicePrice }: CountInputProps) {

    const inputRef = React.useRef<HTMLInputElement | any>(null);

    const { setInnerNum, innerNum } = React.useContext(CountContext)

    console.log(defaultVal, 'changed')

    useEffect(() => {
        inputRef.current.defaultValue = defaultVal

    }, [])
    if (inputRef.current) {
        inputRef.current.defaultValue = defaultVal
    }

    const dispatch = useAppDispatch()

    function handlePriceIput(numberFromInput: string) {

        let number = Number(numberFromInput)

        console.log(number, 'NUMBER X')


        if (number > 0 && number < 100) {

            setInnerNum(Number(number))

            setInnerNum(number)

            let totalSumFromDeleteDevice = devicePrice * defaultVal

            dispatch(addToTotalSum(-totalSumFromDeleteDevice))

            changeValueState(number)

            dispatch(addToTotalSum(number * devicePrice))

            console.log(totalSumFromDeleteDevice, 'AAAAA')
        }

    }

    return (
        <input onKeyDown={(e) => { e.key === "Backspace" ? setInnerNum('') : null }} value={innerNum} onChange={(e) => { handlePriceIput(e.target.value) }} ref={inputRef}></input>
    )
}
