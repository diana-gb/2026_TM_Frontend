import React, { useContext, useState } from 'react'
import MessagesContext from '../../context/MessagesContext'
import SlackLogo from '../../componentes/SlackLogo/SlackLogo'
import MessageError from '../../componentes/Messages/MessageError/MessageError'
import MessagesList from '../../componentes/Messages/MessagesList/MessagesList'
import MessagesForm from '../../componentes/Messages/MessagesForm/MessagesForm'
import './MessageScreen.css'
const MessageScreen = () => {

    const {
        messages_loading,
        messages_list, 
        messages_error,
        sendMessage
    } = useContext(MessagesContext)

    const [newMessage, setNewMessage] = useState('')

    
        if(messages_loading || !messages_list){
            return <SlackLogo/>
        }
    async function handleSend(e) {
        e.preventDefault()

        if(!newMessage.trim()) return

        await sendMessage(newMessage)

        setNewMessage('')
    }

    return (
        <div className="messages-screen">
    <header className="messages-header">
        <h1># general</h1>
    </header>

    <MessageError error={messages_error} />

    <MessagesList messages={messages_list} />

    <MessagesForm
        value={newMessage}
        onChange={setNewMessage}
        onSubmit={handleSend}
    />
    </div>
    )
/*         <div>
            <h1>Mensajes del canal</h1>

            <MessageError error={messages_error}/>

            <MessagesList messages={messages_list}/>

            <MessagesForm
            value={newMessage}
            onChange={setNewMessage}
            onSubmit={handleSend}
            />
        </div>
    ) */
    }

export default MessageScreen