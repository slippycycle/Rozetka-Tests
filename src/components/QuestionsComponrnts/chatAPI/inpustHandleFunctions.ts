import React, { KeyboardEvent } from 'react';

type handleValueFunctionTypee = (value: string) => void

type postFnType = (value : string) => void

export function handlePostThrowButton(value: string, handleValueFunction: handleValueFunctionTypee, postFn: postFnType, loading: boolean) {

    if (value.replaceAll(' ', '').length > 3 && !loading) {
        postFn(value)
        handleValueFunction('')
    } else {

    }
}

export function handlePost(e: KeyboardEvent<HTMLInputElement>, value: string, handleValueFunction: handleValueFunctionTypee, postFn: postFnType, loading: boolean) {

    if (value.replaceAll(' ', '').length > 3 && !loading) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            postFn(value)
            handleValueFunction('')
        }
    } else {
        console.log('no');
    }
}
