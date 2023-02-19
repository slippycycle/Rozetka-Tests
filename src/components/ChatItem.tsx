import React from 'react'
import { MessageContext } from '../context'
import { Message } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'


interface ChatItemProsp {
    message: Message
}

export default function ChatItem({ message }: ChatItemProsp) {

    const [replyesVisible, setReplyesVisible] = React.useState(false)


    const { isReplyMessage, setIsReplyMessage,setReplyTarget,DeleteQuestion } = React.useContext(MessageContext)

 

    return (
        <>
            <div className={c.message}>
                <div className={c.image_conatiner} >
                    <button onClick={() => {
                        setIsReplyMessage(true)
                        setReplyTarget(message)
                        console.log(message)
                    }}>Reply</button>
                </div>
                <div className={c.body__container}>
                    {message.message}
                </div>
                {
                message.from === 'Azbek'?
                <button onClick={() => {DeleteQuestion(message.id)}} >delete</button>
                : null
                }
                {
                    message?.replies?.length > 0 && !replyesVisible ?
                        <p onClick={() => { setReplyesVisible(true) }}>{`replyes ${message.replies.length}`}</p>
                        :
                        null
                }

            </div>
            {
                replyesVisible ?
                    <div className={c.replyes_block}>
                        <>
                            {
                                message.replies.map((rep) => <p>

                                    {rep.message}
                                </p>

                                )
                            }
                        </>
                        <p onClick={() => setReplyesVisible(false)}> Hide</p>
                    </div>
                    :
                    null
               
            }
        </>
    )

}
