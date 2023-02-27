import React from 'react'
import QuestionsChat from '../QuestionsChat'

interface ChatComponentProps {
    chat: any[]
}

export default function ChatComponent({ chat }: ChatComponentProps) {

    console.log('chat render')

   



    return (
       <QuestionsChat chat={chat}/>
    )
}

