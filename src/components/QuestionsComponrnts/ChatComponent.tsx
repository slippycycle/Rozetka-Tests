import React from 'react'
import { IMAGINARY_USER } from '../../consts'
import { Chat } from '../../models/models'
import ChatItem from './ChatItem'
import QuestionsChat from './QuestionsChat'


interface ChatComponentProps {
    chat: Chat
}

export default function ChatComponent({ chat }: ChatComponentProps) {

    console.log('chat render')

    

    return (
        <>
        {/* <ChatItem message={{
            id:'Xawdawdawd',
            from:IMAGINARY_USER,
            date:'22:30',
            replies:[],
            message:'Phantom'   
        }
        }/> */}
        <QuestionsChat chat={chat}/>
        </>
    )
}

