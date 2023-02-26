import axios, { Axios, AxiosError } from 'axios'
import React, { useState } from 'react'
import uuid from 'react-uuid'
import { IMAGINARY_USER } from '../consts'
import { MessageContext } from '../context'
import { Chat, Message, MessageId, ReplyMessage, ReplyMessageId } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'
import ChatComponent from './ChatComponent'
import Loader from './Loader'

interface DeviceQuestionsSubPageProops {
    questionsId: number
}

type customError = {
    message: string
}

export default function DeviceQuestionsSubPage({ questionsId }: DeviceQuestionsSubPageProops) {

    const [chat, setChat] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)

    const [value, setValue] = React.useState<string>('')

    async function fetchQuestions() {


        try {
            const response = await axios.get(`http://localhost:3001/chats?id=${questionsId}`)

            return await response.data

        } catch (error: any) {
            return error.message
        }

    }

    async function PostReply() {


        let updatedMessagse: any = chat[0]

        const current = updatedMessagse.messages.findIndex((mes: Message) => mes.id == replyTarget?.id)

        updatedMessagse.messages?.[current]?.replies?.push({
            from: IMAGINARY_USER,
            message: value,
            id: uuid(),
        })

        axios.put(`http://localhost:3001/chats/${questionsId}`,
            updatedMessagse

        )
            .then(function (response) {
                console.log(response);
            }).then(() => {
                setReload(prev => !prev)
                setValue('')
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    async function PostQuestion() {

        let updatedMessagse: any = chat[0]

        updatedMessagse.messages.push({
            from: IMAGINARY_USER,
            message: value,
            id: uuid(),
            replies: [],

        })



        axios.put(`http://localhost:3001/chats/${questionsId}`,
            updatedMessagse

        )
            .then(function (response) {
                console.log(response);
            }).then(() => {
                setReload(prev => !prev)

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    async function DeleteReplyQuestion(replyId: ReplyMessageId, id: MessageId) {

        let newChat: Chat = chat[0]

        let foundMessage = newChat.messages.findIndex((mes: Message) => mes.id === id)

        // let foundedReplyMessage =   foundMessage?.replies.find((mes: ReplyMessage) => mes.id = replyId)

        newChat.messages[foundMessage].replies = newChat.messages[foundMessage].replies.filter((repM: ReplyMessage) => repM.id !== replyId)


        console.log(newChat)

        axios.put(`http://localhost:3001/chats/${questionsId}`,
            newChat

        )
            .then(function (response) {
                console.log(response);
            }).then(() => {
                setReload(prev => !prev)

            })
            .catch(function (error) {
                console.log(error);
            });




    }


    async function DeleteQuestion(id: string) {

        let updatedMessagse: any = (chat[0] as Chat).messages.filter((mes: Message) => mes.id !== id)

        let newObject: Chat = chat[0]

        newObject.messages = updatedMessagse

        console.log(
            updatedMessagse, 'DELETED'
        )

        axios.put(`http://localhost:3001/chats/${questionsId}`,
            newObject

        )
            .then(function (response) {
                console.log(response);
            }).then(() => {
                setReload(prev => !prev)

            })
            .catch(function (error) {
                console.log(error);
            });

    }



    React.useEffect(() => {

        fetchQuestions().then(response => setChat(response)).catch(er => setError(er)).then(res => setLoading(false))


    }, [reload])


    const [isReplyMessage, setIsReplyMessage] = useState<boolean>(false)
    const [replyTarget, setReplyTarget] = useState<Message | null>(null)






    return (
        <div className={c.main__questions__wrap}>
            <MessageContext.Provider value={{ isReplyMessage, setIsReplyMessage, setReplyTarget, DeleteQuestion, DeleteReplyQuestion, replyTarget }}>

                <div className={c.questions__wrap}>
                    <div className={c.questions__container}>
                        {loading ?
                            <Loader />
                            :
                            <ChatComponent chat={chat} />
                        }
                    </div>

                </div>
                <div className={c.input_container}>
                    {
                        isReplyMessage ?
                            <>
                                <div className={c.reply_info_wrap}>
                                    <span className="material-symbols-outlined">
                                        reply
                                    </span>
                                    <h2>{`reply to @${replyTarget?.from}`}</h2>
                                    <span onClick={() => {setIsReplyMessage(false)}} id="close_span" className="material-symbols-outlined">
                                        close
                                    </span>
                                </div>

                                <input name='post question imput' onChange={(e) => setValue(e.target.value)} placeholder={`enter you reply`}></input>
                                <button onClick={PostReply}>
                                  
                                    <span  className="material-symbols-outlined">
                                        send
                                    </span>
                                </button>

                            </>
                            :
                            <>
                                <input name='post question imput' onChange={(e) => setValue(e.target.value)} placeholder='make a question'></input>
                                <button onClick={PostQuestion} >
                                  
                                    <span className="material-symbols-outlined">
                                        send
                                    </span>
                                </button>
                            </>
                    }
                </div>
            </MessageContext.Provider>
        </div>
    )

}
