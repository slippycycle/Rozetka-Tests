import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { CountContext } from '../context';
import { DeviceId } from '../models/models';
import { addToTotalSum, setCurrentCountAtDevicesInfo, } from '../store/features/Basket.Slice';
import { useAppDispatch } from '../store/hooks';


interface CountInputProps {
    defaultVal: number
    changeValueState: Dispatch<SetStateAction<number>>
    devicePrice: number,
    id: DeviceId
}

export default function CountInput({ defaultVal, changeValueState, devicePrice,id }: CountInputProps) {

    const inputRef = React.useRef<HTMLInputElement | any>(null);

    const { setInnerNum, innerNum } = React.useContext(CountContext)

    const dispatch = useAppDispatch()


    useEffect(() => {
        
        inputRef.current.defaultValue = defaultVal

    }, [])
    if (inputRef.current) {
        inputRef.current.defaultValue = defaultVal
    }


    function handlePriceIput(numberFromInput: string) {

        let number = Number(numberFromInput)

        if (number > 0 && number < 100) {


            setInnerNum(Number(number))

            setInnerNum(number)

            let totalSumFromDeleteDevice = devicePrice * defaultVal

            dispatch(addToTotalSum(-totalSumFromDeleteDevice))

            changeValueState(number)

            dispatch(addToTotalSum(number * devicePrice))

            console.log(totalSumFromDeleteDevice, 'AAAAA')

            dispatch(setCurrentCountAtDevicesInfo({ id: id, count: number   }))
        }

    }

    function handleBackSpace(key: string) {

        if (key === "Backspace") {
            setInnerNum('')
        }

    }

    return (
        <input onKeyDown={(e) => handleBackSpace(e.key)} value={innerNum} onChange={(e) => { handlePriceIput(e.target.value) }} ref={inputRef}></input>
    )
}
