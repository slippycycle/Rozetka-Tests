import axios, { Axios, AxiosError } from 'axios'
import React, { useCallback, useState } from 'react'
import uuid from 'react-uuid'
import { IMAGINARY_USER } from '../consts'
import { MessageContext } from '../context'
import { Chat, Message, MessageId, ReplyMessage, ReplyMessageId } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'
import ChatComponent from './QuestionsComponrnts/ChatComponent'
import Loader from './Loader'
import PostQuestionIput from './PostQuestionIput'
import QuestionsReplyInput from './QuestionsComponrnts/QuestionsReplyInput'
import { BlobOptions } from 'buffer'

interface DeviceQuestionsSubPageProops {
    questionsId: number
}

type customError = {
    message: string
}

export default function DeviceQuestionsSubPage({ questionsId }: DeviceQuestionsSubPageProops) {

    const [chat, setChat] = useState([])

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [reload, setReload] = useState<boolean>(false)
    const [postLoading, setPostLoading] = useState<boolean>(false)


    async function fetchQuestions() {


        try {
            const response = await axios.get(`http://localhost:3001/chats?id=${questionsId}`)

            return await response.data

        } catch (error: any) {
            return error.message
        }

    }

    async function PostReply(value: string) {


        setPostLoading(true)

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
            
            
        })
        .catch(function (error) {
            console.log(error);
        });
        setIsReplyMessage(false)





    }


    function makeScrollTOBottom() {
        let htmlElement = document.documentElement;
        let bodyElement = document.body;

        let height = Math.max(
            htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
            bodyElement.scrollHeight, bodyElement.offsetHeight
        );

        window.scrollTo({
            top: height,
            behavior: 'smooth'
        });
    }


    async function PostQuestion(value: string) {

        setPostLoading(true)

         //timeouts i use to show it more explicitly
        setTimeout(() => {

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
    
                    }).then(() => {
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

        },1500)


  
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
        //timeouts i use to show it more explicitly
        fetchQuestions().then(response => setChat(response)).catch(er => setError(er)).then(res => setTimeout(() => { setPostLoading(false) }) ).then(res => setLoading(false)).then(res => makeScrollTOBottom())

    }, [reload])


    const [isReplyMessage, setIsReplyMessage] = useState<boolean>(false)
    const [replyTarget, setReplyTarget] = useState<Message | null>(null)


    // function handleEnterPost(e) {
    //     if (e.key === 'Enter') {
    //         console.log('do validate')
    //       }
    // }



    return (
        <div className={c.main__questions__wrap}>


            <MessageContext.Provider value={{ isReplyMessage, setLoading, postLoading, setPostLoading, loading, setIsReplyMessage, setReplyTarget, DeleteQuestion, DeleteReplyQuestion, replyTarget, PostQuestion, PostReply }}>

                <div className={c.questions__wrap}>
                    <div className={c.questions__container}>
                        {loading ?
                            <div className={c.loading_container}>
                                <Loader />
                            </div>
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
                                    <h2>{`reply to @${replyTarget?.from} ${replyTarget?.message.slice(0, 18)}`}</h2>
                                    <span onClick={() => { setIsReplyMessage(false) }} id="close_span" className="material-symbols-outlined">
                                        close
                                    </span>
                                </div>

                                <QuestionsReplyInput />

                            </>
                            :

                            <PostQuestionIput />
                    }
                    <h2>POstLoading {JSON.stringify(postLoading)}</h2>
                </div>
            </MessageContext.Provider>
        </div>
    )

}
