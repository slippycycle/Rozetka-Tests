import React, { useEffect } from 'react'
import c from '../styles/CountInput.module.scss'

interface CountInputProps {
    defaultVal: number | null
}

export default function CountInput({ defaultVal }: CountInputProps) {

    const inputRef = React.useRef<any>(null) 

    console.log(defaultVal, 'changed')
   
    useEffect(() => {
        inputRef.current.defaultValue = defaultVal

    },[])
    if (inputRef.current) {
        inputRef.current.defaultValue = defaultVal
    } 


    return (
        <input ref={inputRef}></input>
    )
}
