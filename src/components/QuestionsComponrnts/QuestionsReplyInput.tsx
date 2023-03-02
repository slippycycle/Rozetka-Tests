import React, { KeyboardEvent } from 'react';
import { MessageContext } from '../../context'
import c from './style/ChatInputs.module.scss'
import {  handlePostThrowButton } from './chatAPI/inpustHandleFunctions';

export default function QuestionsReplyInput() {


    const [value, setValue] = React.useState<string>('')

    const { postReply, postLoading } = React.useContext(MessageContext)



    return (
        <div className={c.input_block}>
            <input name='post question imput' value={value} onChange={(e) => setValue(e.target.value)} placeholder={`enter you reply`}></input>
            <button onClick={() => {
                handlePostThrowButton(value, setValue, postReply,postLoading)
            }
            }>

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
