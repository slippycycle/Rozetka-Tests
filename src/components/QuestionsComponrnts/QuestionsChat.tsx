import React from 'react'
import { Chat, Message } from '../../models/models'
import c from './../../styles/DeviceSubPages.module.scss'
import ChatItem from './ChatItem'

interface QuestionsChatProps {
    chat: Chat
}

export default function QuestionsChat({ chat }: QuestionsChatProps) {


    return (
        <div className={c.chat__container}>
            {
                chat.messages.map((mes: Message) => <ChatItem key={mes.id} message={mes} />)
            }

        </div>
    )
}


