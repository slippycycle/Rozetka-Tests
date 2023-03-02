import axios, { Axios, AxiosError } from 'axios'
import React, { useCallback, useState } from 'react'
import uuid from 'react-uuid'
import { IMAGINARY_USER, scrollAddition } from '../consts'
import { MessageContext } from '../context'
import { Chat, Message, MessageId, ReplyMessage, ReplyMessageId } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'
import ChatComponent from './QuestionsComponrnts/ChatComponent'
import Loader from './Loader'
import QuestionsReplyInput from './QuestionsComponrnts/QuestionsReplyInput'
import { BlobOptions } from 'buffer'
import { scrollToY } from '../utils/mathFunctions'
import PostQuestionIput from './QuestionsComponrnts/PostQuestionIput'
import QuestionsChat from './QuestionsComponrnts/QuestionsChat'

interface DeviceQuestionsSubPageProops {
    questionsId: number
}



export default function DeviceQuestionsSubPage({ questionsId }: DeviceQuestionsSubPageProops) {

    const [chat, setChat] = useState<Chat>({ id: '', messages: [] })

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [reload, setReload] = useState<boolean>(false)
    const [postLoading, setPostLoading] = useState<boolean>(false)
    const [replyTargetYcords, setReplyTargetYcords] = React.useState(0)
    const [isReplyMessage, setIsReplyMessage] = useState<boolean>(false)
    const [replyTarget, setReplyTarget] = useState<Message | null>(null)




    const questionsRef = React.useRef<HTMLDivElement>(null)



    async function fetchQuestions() {

        try {
            const response = await axios.get(`http://localhost:3001/chats?id=${questionsId}`)


            return await response.data[0] as Chat

        } catch (error: any) {
            return error.message
        }

    }

    async function postReply(value: string) {

        setPostLoading(true)

        let updatedMessagse: any = chat

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
                console.log(replyTargetYcords,'CORDS')
                console.log(response);
                scrollToY(replyTargetYcords - scrollAddition)
                setPostLoading(false)

            })
        setIsReplyMessage(false)


    }




    async function postQuestion(value: string) {

        //timeouts i use to show it more explicitly

        let updatedMessagse: Chat = chat as Chat

        const date = new Date();

        let currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;


        let message: Message = {
            from: IMAGINARY_USER,
            message: value,
            id: uuid(),
            replies: [],
            date: currentDate

        }

        updatedMessagse.messages.unshift(message)


        axios.put(`http://localhost:3001/chats/${questionsId}`,
            updatedMessagse

        ).then(function (response) {
            console.log(response);
            setReload(prev => !prev)
        })

    }


    async function deleteReplyQuestion(replyId: ReplyMessageId, id: MessageId) {

        let newChat: Chat = chat as Chat

        let foundMessage = newChat.messages.findIndex((mes: Message) => mes.id === id)

        // let foundedReplyMessage =   foundMessage?.replies.find((mes: ReplyMessage) => mes.id = replyId)

        newChat.messages[foundMessage].replies = newChat.messages[foundMessage].replies.filter((repM: ReplyMessage) => repM.id !== replyId)


        console.log(newChat)

        axios.put(`http://localhost:3001/chats/${questionsId}`,
            newChat

        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    async function deleteQuestion(id: string) {

        let updatedMessagse: any = (chat as Chat).messages.filter((mes: Message) => mes.id !== id)

        let newObject: Chat = chat as Chat

        newObject.messages = updatedMessagse

        console.log(
            updatedMessagse, 'DELETED'
        )


        axios.put(`http://localhost:3001/chats/${questionsId}`,
            newObject
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }




    React.useEffect(() => {

        fetchQuestions()
            .then((response) => {
                setLoading(false)
                setChat(response)

                console.log('MAIN')


            })

    }, [])








    return (
        <div className={c.main__questions__wrap}>


            <MessageContext.Provider value={{
                isReplyMessage,
                replyTargetYcords,
                setReplyTargetYcords,
                setLoading,
                postLoading,
                setPostLoading,
                loading,
                setIsReplyMessage,
                setReplyTarget,
                deleteQuestion,
                deleteReplyQuestion,
                replyTarget,
                postQuestion,
                postReply
            }}>

                <div className={c.questions__wrap}>
                    <div ref={questionsRef} className={c.questions__container}>
                        {loading ?
                            <div className={c.loading_container}>
                                <Loader />
                            </div>
                            :
                           
                            <QuestionsChat chat={chat} />
                            // <ChatComponent chat={chat as Chat} />
                        }
                    </div>
                </div>
                <div className={c.input_container}>
                    {
                        isReplyMessage ?
                            <>
                                <div className={c.reply_info_wrap}>
                                    <span onClick={() => scrollToY(replyTargetYcords)} className="material-symbols-outlined">
                                        reply
                                    </span>
                                    <h2 onClick={() => scrollToY(replyTargetYcords - scrollAddition)} >{`reply to @${replyTarget?.from} ${replyTarget?.message.slice(0, 15)}`}</h2>
                                    <span onClick={() => { setIsReplyMessage(false) }} id="close_span" className="material-symbols-outlined">
                                        close
                                    </span>
                                </div>

                                <QuestionsReplyInput />

                            </>
                            :

                            <PostQuestionIput />
                    }

                </div>
            </MessageContext.Provider>
        </div>
    )

}
