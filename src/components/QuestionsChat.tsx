import React from 'react'
import { Message } from '../models/models'
import c from '../styles/DeviceSubPages.module.scss'
import ChatItem from './QuestionsComponrnts/ChatItem'

interface QuestionsChatProps {
    chat: any[]
}

export default  function QuestionsChat({chat}: QuestionsChatProps) {
    

    return (
        <div className={c.chat__container}>
            {
                chat[0].messages.map((mes: Message) => <ChatItem message={mes} />)
            }

        </div>
    )
}


