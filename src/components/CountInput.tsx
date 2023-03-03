import React, { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'
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


    const [value, setValue] = React.useState<null | number>(null)

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

        if (  number > 0) {
           
        
                //seting devices number
                setValue((Number(numberFromInput) ))
                
                let totalSumFromDeleteDevice =  devicePrice * defaultVal

                dispatch(addToTotalSum( -totalSumFromDeleteDevice ) )

                changeValueState(number)


                dispatch(addToTotalSum( number * devicePrice ))

                console.log(totalSumFromDeleteDevice,'AAAAA')
        

                // console.log(defaultVal)
              
                // dispatch(addToTotalSum(number * devicePrice))

                // let totalSumFromDeleteDevice = devicePrice * number

                // console.log(totalSumFromDeleteDevice,'AAAAA')
        
        
                // dispatch(addToTotalSum(  devicePrice * number  ) )
                


                //push current 

                
        }
        else {
           
        }
    }

    return (
        <input onChange={(e) => { handlePriceIput(e.target.value) }} ref={inputRef}></input>
    )
}
