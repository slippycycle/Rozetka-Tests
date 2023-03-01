import React from 'react'
import { Chat } from '../../models/models'
import QuestionsChat from './QuestionsChat'

interface ChatComponentProps {
    chat: Chat
}

export default function ChatComponent({ chat }: ChatComponentProps) {

    console.log('chat render')


    return (
       <QuestionsChat chat={chat}/>
    )
}

