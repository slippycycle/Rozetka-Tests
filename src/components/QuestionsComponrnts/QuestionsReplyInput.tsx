import React from 'react'
import { MessageContext } from '../../context'

export default function QuestionsReplyInput() {


    const [value, setValue] = React.useState<string>('')

    const { PostReply,loading } = React.useContext(MessageContext)



    function handlePostThrowButton() {

        if (value.replaceAll(' ','').length > 3 && !loading )  {
            PostReply(value)
            setValue('')
        } else {

        }
    }

    function handlePost(e: any) {

        if (value.replaceAll(' ','').length > 3  && !loading )  {
            if (e.key === 'Enter' || e.keyCode === 13) {
                PostReply(value)
                setValue('')
            }
        } else {
            console.log('no');
        }
    }


    return (
        <>
            <input onKeyDown={(e) => handlePost(e)} name='post question imput' value={value} onChange={(e) => setValue(e.target.value)} placeholder={`enter you reply`}></input>
            <button onClick={
                handlePostThrowButton
            }>

                <span className="material-symbols-outlined">
                    send
                </span>
            </button>

        </>

    )
}
