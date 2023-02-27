import React from 'react'
import { MessageContext } from '../context'



export default function PostQuestionIput() {

    const [value, setValue] = React.useState('')

    const {  PostQuestion } = React.useContext(MessageContext)


    return (
        <>
            <input name='post question imput' value={value} onChange={(e) => setValue(e.target.value)} placeholder='make a question'></input>
            <button onClick={() => {PostQuestion(value)}} >

                <span className="material-symbols-outlined">
                    send
                </span>
            </button>
        </>
    )
}
