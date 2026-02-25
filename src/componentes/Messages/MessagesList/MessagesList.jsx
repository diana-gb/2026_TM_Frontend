import React from 'react'
import MessagesItem from '../MessagesItem/MessagesItem'
import './MessagesList.css'

const MessagesList = ({messages}) => {
    if (messages.length === 0) {
        return <span className='messages-empty'>No hay mensajes en este canal</span>
    }

    return (
        <div className='messages-list'>
            {messages.map((message) => (
                <MessagesItem key={message._id} message={message} />
            ))}
        </div>
    )
}

export default MessagesList
