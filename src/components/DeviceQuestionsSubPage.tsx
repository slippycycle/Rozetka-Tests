import axios, { Axios, AxiosError } from 'axios'
import React, { useState } from 'react'
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


    async function fetchQuestions() {


        try {
            const response = await axios.get(`http://localhost:3001/questions?chatId=${questionsId}`)

            return await response.data

        } catch (error: any) {
            return error.message
        }

    }

    React.useEffect(() => {

        fetchQuestions().then(response => setChat(response)).catch(er => setError(er)).then(res => setLoading(false))


    }, [])


    return(
        <div className={c.quastions__wrap}>
            <div className={c.questions__container}>
                {loading ?
                    <Loader />
                    :
                    <ChatComponent chat={chat} />
                }
            </div>
            <input placeholder='make a quastion'></input>
        </div>
    )

}
