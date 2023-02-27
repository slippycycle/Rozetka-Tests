import React from 'react'
import { IMAGINARY_USER } from '../consts'
import { MessageContext } from '../context'
import { Message } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'


interface ChatItemProsp {
    message: Message
}

export default function ChatItem({ message }: ChatItemProsp) {



    const [replyesVisible, setReplyesVisible] = React.useState(false)


    const { isReplyMessage, setIsReplyMessage, setReplyTarget, DeleteQuestion, DeleteReplyQuestion, replyTarget } = React.useContext(MessageContext)

    const [messControllVisible, setmessControllVisible] = React.useState<boolean>(false)

    const [messReplyControllVisibleId, setmessControllReplyVisibleId] = React.useState<string | number>('none')


    console.log(replyTarget)


    return (
        <>
            <div className={c.message}>
                <div className={c.user__container} >
                    <h3>
                        {message.from}
                    </h3>
                </div>
                <div className={c.body__container}>
                    {message.message}
                </div>
                <div className={c.message__control__block}>

                    {
                        message.from === IMAGINARY_USER ?
                            <span onClick={() => { setmessControllVisible(prev => !prev) }} className="material-symbols-outlined">
                                more_vert
                            </span>
                            :
                            null
                    }
                    {
                        messControllVisible && message.from === IMAGINARY_USER ?
                            <div className={c.message__controll}>

                                <button onClick={() => { DeleteQuestion(message.id) }} >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                    delete
                                </button>

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
                            subdirectory_arrow_right
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
                                            <div className={c.message__control__block__reply}>

                                                {
                                                    rep.from === IMAGINARY_USER ?
                                                        <>
                                                           <div className={c.ss}>
                                                            <span  onClick={() => setmessControllReplyVisibleId(rep.id)} className="material-symbols-outlined">
                                                                more_vert
                                                            </span>
                                                           </div>
                                                            {
                                                                messReplyControllVisibleId == rep.id ?
                                                                    <div className={c.message__controll__reply}>

                                                                        <button onClick={() => { DeleteReplyQuestion(rep.id, message.id) }} >
                                                                            <span className="material-symbols-outlined">
                                                                                delete
                                                                            </span>
                                                                            delete
                                                                        </button>

                                                                    </div>
                                                                    :
                                                                    null

                                                            }
                                                        </>
                                                        :
                                                        null
                                                }



                                            </div>
                                            <div className={c.reply__message__user}>
                                                {rep.from}
                                            </div>
                                            <div className={c.reply__body}>
                                                {rep.message}
                                            </div>
                                        </div>


                                    )
                                }
                            </>
                            <h3 onClick={() => setReplyesVisible(false)}>
                                Hide
                                <span className="material-symbols-outlined">
                                    hide
                                </span>
                            </h3>
                        </div>
                        :
                        null

                }
            </div>

        </>
    )

}
