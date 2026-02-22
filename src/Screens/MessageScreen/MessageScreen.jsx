import React, { useContext, useState } from 'react'
import MessagesContext from '../../context/MessagesContext'
import SlackLogo from '../../componentes/SlackLogo/SlackLogo'

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
        <div>
            <h1>Tus Mensajes</h1>
            {
                messages_error && <span>{messages_error.message}</span>
            }
            {
                messages_list && messages_list.length > 0 && messages_list.map((message) => {
                    const username = message.fk_id_member.fk_id_user.username
                    const content = message.message

                    return(
                        <div key={message._id}>
                            <p>{username}</p>
                            <p>{content}</p>
                        </div>
                    )
                })
            }
            {
                messages_list && messages_list.length === 0 && <span>No hay mensajes en este canal</span>
            }
            
            <form onSubmit={handleSend}>
                <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage (e.target.value)}
                placeholder='Escribe un mensaje..'
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
    }

export default MessageScreen