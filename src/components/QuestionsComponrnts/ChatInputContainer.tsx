import React from 'react'
import { scrollAddition } from '../../consts'
import { MessageContext } from '../../context'
import { scrollToY } from '../../utils/mathFunctions'
import PostQuestionIput from './PostQuestionIput'
import QuestionsReplyInput from './QuestionsReplyInput'
import c from './style/InputsContainer.module.scss'

export default function ChatInputContainer() {
  
    const { isReplyMessage,setIsReplyMessage,replyTargetYcords,replyTarget} = React.useContext(MessageContext)
  
    return (
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
  )
}
