import { AxiosResponse } from 'axios';
import React, { KeyboardEvent } from 'react';

type handleValueFunctionTypee = (value: string) => void

type postFnType = (value : string) => AxiosResponse

export async function handlePostThrowButton(value: string, handleValueFunction: handleValueFunctionTypee, postFn: postFnType, loading: boolean) {

   
   let response = postFn(value)

   handleValueFunction('')
  
   return  await response

 
}

// export function handlePost(e: KeyboardEvent<HTMLInputElement>, value: string, handleValueFunction: handleValueFunctionTypee, postFn: postFnType, loading: boolean) {

//     if (value.replaceAll(' ', '').length > 3 && !loading) {
//         if (e.key === 'Enter' || e.keyCode === 13) {
//             postFn(value)
//             handleValueFunction('')
//         }
//     } else {
//         console.log('no');
//     }
// }
