import React from 'react';
import { MessageContext } from '../../context'
import c from './style/ChatInputs.module.scss'
import { handlePostThrowButton } from './chatAPI/inpustHandleFunctions';


export default function PostQuestionIput() {

    const [value, setValue] = React.useState('')
    const [postLoading, setPostLoading] = React.useState(false)
    const [verified, setVerified] = React.useState(true)


    const { postQuestion } = React.useContext(MessageContext)


    return (
        <div className={c.input_block}>
            <input
                className={verified ? c.input_def : c.input_wrong}
                name='post question imput' value={value}
                onChange={(e) => setValue(e.target.value)} placeholder='make a question'>

            </input>
            <button onClick={() => {

                if (value.replaceAll(' ', '').length > 3) {
                    handlePostThrowButton(value, setValue, postQuestion, postLoading)
                    setVerified(true)
                } else {
                    setVerified(false)
                }



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
