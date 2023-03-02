import React from 'react';
import { MessageContext } from '../../context'
import c from './style/ChatInputs.module.scss'
import { handlePost, handlePostThrowButton } from './chatAPI/inpustHandleFunctions';


export default function PostQuestionIput() {

    const [value, setValue] = React.useState('')
    const [postLoading, setPostLoading] = React.useState(false)

    const { postQuestion } = React.useContext(MessageContext)


    return (
        <div className={c.input_block}>
            <input onKeyDown={(e) => { handlePost(e, value, setValue, postQuestion, postLoading) }}
             name='post question imput' value={value} onChange={(e) => setValue(e.target.value)} placeholder='make a question'></input>
            <button onClick={() => {
                handlePostThrowButton(value, setValue, postQuestion, postLoading)
            }}>
                {postLoading ?

                    <div className={c.spiner}>
                        <span className="material-symbols-outlined">
                            refresh
                        </span>
                    </div>

                    :
                    <span className="material-symbols-outlined">
                        send
                    </span>

                }

            </button>
        </div>
    )
}
