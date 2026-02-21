import React, { useContext } from 'react'
import MessagesContext from '../../context/MessagesContext'
import SlackLogo from '../../componentes/SlackLogo/SlackLogo'

const MessageScreen = () => {

    const {messages_loading, messages_list, messages_error} = useContext(MessagesContext)

    if(messages_loading || !messages_list){
        return <SlackLogo/>
    }

    return (
        <div>
            <h1>Tus Mensajes</h1>
            {
                messages_error && <span>{messages_error.message}</span>
            }
            {
                messages_list && messages_list.length > 0 && messages_list.map((messages) => {
                    const username = messages.fk_id_member.fk_id_user.username
                    const content = messages.message

                    return(
                        <div key={messages._id}>
                            <p>{username}</p>
                            <p>{content}</p>
                        </div>
                    )
                })
            }
            {
                messages_list && messages_list.length === 0 && <span>No hay mensajes en este canal</span>
            }
        </div>
    )
    }

export default MessageScreen