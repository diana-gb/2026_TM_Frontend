import { useParams } from 'react-router-dom'
import useRequest from '../hooks/useRequest'
import { useContext, useEffect, useState } from 'react'
import MessagesContext from './MessagesContext.js'
import { AuthContext } from './AuthContext.jsx'
import { sendMessage as sendMessageService, getMessages } from '../services/messagesService'


const MessagesContextProvider = ({ children }) => {

    const { workspace_id, channel_id } = useParams()

    const [messages_list, setMessagesList] = useState([])

    const { loading, response, error, sendRequest } = useRequest()

    const { session } = useContext(AuthContext)

    useEffect(
        () => {
            async function loadMessages() {

                if (workspace_id && channel_id) {

                    const result = await sendRequest(() =>
                        getMessages(workspace_id, channel_id)
                    )

                    if (result?.data?.messages) {
                        setMessagesList(result.data.messages)
                    } else if (result?.messages) {
                        setMessagesList(result.messages)
                    } else if (Array.isArray(result)) {
                        setMessagesList(result)
                    }
                }
            }
            loadMessages()
        },

        [workspace_id, channel_id]
    )

    async function sendMessage(content) {

        if (!workspace_id || !channel_id) {
            return
        }


        const result = await sendRequest(() =>
            sendMessageService(workspace_id, channel_id, content)
        )


        if (result?.data) {
            setMessagesList(prev => [...prev, result.data])
        } else if (result?.message_created) {
            setMessagesList(prev => [...prev, result.message_created])
        } else if (result && !result.ok && !result.data) {
            // If it's the message itself
            setMessagesList(prev => [...prev, result])
        }
    }

    const values_provider = {
        messages_loading: loading,
        messages_list: messages_list,
        messages_error: error,
        sendMessage
    }

    return (
        <MessagesContext.Provider
            value={values_provider}>
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider