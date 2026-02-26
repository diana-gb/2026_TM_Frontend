import React, { useContext, useState } from 'react'
import MessagesContext from '../../context/MessagesContext'
import SlackLogo from '../../componentes/SlackLogo/SlackLogo'
import MessageError from '../../componentes/Messages/MessageError/MessageError'
import MessagesList from '../../componentes/Messages/MessagesList/MessagesList'
import MessagesForm from '../../componentes/Messages/MessagesForm/MessagesForm'
import './MessageScreen.css'
import ChannelHeader from '../../componentes/Channels/ChannelHeader/ChannelHeader'
import ChannelError from '../../componentes/Channels/ChannelError/ChannelError'
import ChannelList from '../../componentes/Channels/ChannelList/ChannelList'
import { useNavigate, useParams } from 'react-router'
import { ChannelContext } from '../../context/ChannelContext'
const MessageScreen = () => {

        const {workspace_id, channel_id} = useParams()
        const navigate = useNavigate()
        const {channel_list_loading, channel_list, channel_list_error}= useContext(ChannelContext)

        const channels = channel_list?.data?.channels || []

        const currentChannel = channels.find(
        (channel) => String(channel._id) === String(channel_id)
            )


    const {
        messages_loading,
        messages_list, 
        messages_error,
        sendMessage
    } = useContext(MessagesContext)

    const [newMessage, setNewMessage] = useState('')

    
/*         if(messages_loading || !messages_list){
            return <SlackLogo/>
        } */
    async function handleSend(e) {
        e.preventDefault()

        if(!newMessage.trim()) return

        await sendMessage(newMessage)

        setNewMessage('')
    }

    return (
        <div className="messages-screen">
            <div className="channels-screen-left">

                <ChannelHeader />

                <ChannelError error={channel_list_error} />

                <ChannelList
                    channels={channel_list?.data?.channels}
                    workspace_id={workspace_id}
                    onNavigate={navigate}
                />
            </div>
            <div className='messages-content'>
                <header className="messages-header">
                    </header>

{ messages_loading ? (
    <SlackLogo/>
) : (    
    <>

                <MessageError error={messages_error} />

                <MessagesList messages={messages_list} />

                <MessagesForm
                    value={newMessage}
                    onChange={setNewMessage}
                    onSubmit={handleSend}
                /> 
    
    </>
                )}
            </div>
    </div>
    )

    }

export default MessageScreen