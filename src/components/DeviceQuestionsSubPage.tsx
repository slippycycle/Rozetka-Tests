import axios, { Axios, AxiosError } from 'axios'
import React, { useState } from 'react'
import uuid from 'react-uuid'
import { MessageContext } from '../context'
import { Message } from '../models/models'
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

        const current = updatedMessagse.messages.findIndex((mes) => mes.id == replyYarget?.id)
        
        updatedMessagse.messages?.[current]?.replies?.push( {
            from: "Azbek",
            message: value,
            id: uuid(),            
        })

        axios.put(`http://localhost:3001/chats/${questionsId}`,
        updatedMessagse

    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

      

      

    }





    async function PostQuestion() {

        let updatedMessagse: any = chat[0]

        updatedMessagse.messages.push({
            from: "Azbek",
            message: value,
            id: uuid(),
            replies:[],
            
        })

        console.log(
            updatedMessagse
        )

        axios.put(`http://localhost:3001/chats/${questionsId}`,
            updatedMessagse

        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    React.useEffect(() => {

        fetchQuestions().then(response => setChat(response)).catch(er => setError(er)).then(res => setLoading(false))


    }, [])


    const [isReplyMessage, setIsReplyMessage] = useState<boolean>(false)
    const [replyYarget, setReplyTarget] = useState<Message | null>(null)


    return (
        <div className={c.quastions__wrap}>
            <MessageContext.Provider value={{ isReplyMessage, setIsReplyMessage, setReplyTarget }}>
                <div className={c.questions__container}>
                    {loading ?
                        <Loader />
                        :
                        <ChatComponent chat={chat} />
                    }
                </div>
                {
                    isReplyMessage ?
                        <>
                            <input name='post question imput' onChange={(e) => setValue(e.target.value)} placeholder={`@${replyYarget?.from}`}></input>
                            <button onClick={PostReply} >Post</button>
                        </>
                        :
                        <>
                            <input name='post question imput' onChange={(e) => setValue(e.target.value)} placeholder='make a question'></input>
                            <button onClick={PostQuestion} >Post</button>
                        </>
                }
            </MessageContext.Provider>

        </div>
    )

}
