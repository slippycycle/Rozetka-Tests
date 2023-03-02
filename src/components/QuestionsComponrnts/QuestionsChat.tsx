import React from 'react'
import { Chat, Message } from '../../models/models'
import { makeChateStepTobottom, makeChatStepToTop } from '../../store/features/Chat.Slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import c from './../../styles/DeviceSubPages.module.scss'
import ChatItem from './ChatItem'

interface QuestionsChatProps {
    chat: Chat
}

export default function QuestionsChat({ chat }: QuestionsChatProps) {

    //i use castom pagination as JSON server cant make it inside key message 

    const { chatItemsOpened, topChatItems } = useAppSelector(state => state.chatReducer)

    const dispatch = useAppDispatch()

    return (
        <div className={c.chat__container}>

            {topChatItems > 0 ?
                <button className={c.top_button} onClick={() => { dispatch(makeChatStepToTop()) }} >
                    Show prev {topChatItems}
                    <span className="material-symbols-outlined">
                        expand_less
                    </span>
                </button>
                :
                null
            }


            {
                chat.messages.slice(topChatItems, chatItemsOpened).map((mes: Message) => <ChatItem key={mes.id} message={mes} />)
            }

            {chat.messages.length - chatItemsOpened > 0 ?

                <button className={c.bottom_button} onClick={() => { dispatch(makeChateStepTobottom()) }}>
                    Show more {chat.messages.length - chatItemsOpened}
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                </button>
                :
                null}

        </div>
    )
}


