import React from 'react'
import { MessageContext } from '../../context'

export default function QuestionsReplyInput() {
   
   
    const [value, setValue] = React.useState<string>('')

    const {PostReply} = React.useContext(MessageContext)

    return (
        <>
            <input name='post question imput' onChange={(e) => setValue(e.target.value)} placeholder={`enter you reply`}></input>
            <button onClick={() => {PostReply(value)}}>

                <span className="material-symbols-outlined">
                    send
                </span>
            </button>

        </>

    )
}
