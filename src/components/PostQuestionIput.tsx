import React from 'react'
import { MessageContext } from '../context'
import c from '../styles/DeviceSubPages.module.scss'


export default function PostQuestionIput() {

    const [value, setValue] = React.useState('')

    const { PostQuestion, postLoading } = React.useContext(MessageContext)


    function handlePostThrowButton() {

        if (value.replaceAll(' ', '').length > 3 && !postLoading) {
            PostQuestion(value)
            setValue('')
        } else {

        }
    }

    function handlePost(e: any) {

        if (value.replaceAll(' ', '').length > 3 && !postLoading) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                PostQuestion(value)
                setValue('')
            }
        } else {
            console.log('no');
        }
    }

    return (
        <>
            <input onKeyDown={(e) => { handlePost(e) }} name='post question imput' value={value} onChange={(e) => setValue(e.target.value)} placeholder='make a question'></input>
            <button onClick={handlePostThrowButton}>
                {postLoading ?

              
                        <span className="material-symbols-outlined">
                            refresh
                        </span>
                    
                    :
                    <span className="material-symbols-outlined">
                        send
                    </span>

                }

            </button>
        </>
    )
}
