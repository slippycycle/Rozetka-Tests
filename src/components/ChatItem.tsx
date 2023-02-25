import React from 'react'
import { MessageContext } from '../context'
import { Message } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'


interface ChatItemProsp {
    message: Message
}

export default function ChatItem({ message }: ChatItemProsp) {

    const [replyesVisible, setReplyesVisible] = React.useState(false)


    const { isReplyMessage, setIsReplyMessage, setReplyTarget, DeleteQuestion } = React.useContext(MessageContext)

    const [messControllVisible, setmessControllVisible] = React.useState<boolean>(false)





    return (
        <>
            <div className={c.message}>
                <div className={c.user__container} >
                    {/* <button onClick={() => {
                        setIsReplyMessage(true)
                        setReplyTarget(message)
                        console.log(message)
                    }}>Reply</button> */}
                    <h3>
                        {message.from}
                    </h3>
                </div>
                <div className={c.body__container}>
                    {message.message}
                </div>
                <div className={c.message__control__block}>

                    {
                        message.from === 'Azbek' ?
                            <span onClick={() => { setmessControllVisible(prev => !prev) }} className="material-symbols-outlined">
                                more_vert
                            </span>
                            :
                            null
                    }
                    {
                        messControllVisible && message.from === 'Azbek' ?
                            <div className={c.message__controll}>
                                {
                                    message.from === 'Azbek' ?
                                        <button onClick={() => { DeleteQuestion(message.id) }} >delete</button>
                                        : null
                                }
                            </div>
                            :
                            null
                    }

                </div>

                <div className={c.control_block}>

                    <button onClick={() => {
                        setIsReplyMessage(true)
                        setReplyTarget(message)
                        console.log(message)
                    }}>
                        <span className="material-symbols-outlined">
                            reply
                        </span>
                        Reply
                    </button>
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
                                message.replies.map((rep) =>
                                    <div className={c.reply__message}>
                                        <div className={c.reply__message__user}>
                                            {rep.from}
                                        </div>
                                        {rep.message}
                                    </div>


                                )
                            }
                        </>
                        <p onClick={() => setReplyesVisible(false)}> Hide</p>
                    </div>
                    :
                    null

            }
            </div>

        </>
    )

}
