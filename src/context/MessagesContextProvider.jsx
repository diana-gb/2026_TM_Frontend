import { useParams } from 'react-router-dom'
import './MessagesContext.js'
import useRequest from '../hooks/useRequest'
import { useContext, useEffect, useState  } from 'react'
import getMessages from '../services/messagesService'
import MessagesContext from './MessagesContext.js'
import { AuthContext } from './AuthContext.jsx'
const MessagesContextProvider = ({children}) => {

    const{workspace_id, channel_id} = useParams()

    const [messages_list, setMessagesList] = useState([])

    const {loading, response, error, sendRequest} = useRequest()

    const{ session} = useContext(AuthContext)

    useEffect(
        () => {
            async function loadMessages() {
                
                if(workspace_id && channel_id){

                    const result = await sendRequest( () =>
                            getMessages(workspace_id, channel_id)
                    )

                    if(result?.data?.messages){
                        setMessagesList(result.data.messages)
                    }
                }
            }
                loadMessages()
        },

            [workspace_id, channel_id]
    )

    async function sendMessage(content) {

        if(!channel_id || !session?.member_id){
            return 
        }
        
      /*   const member_id = session?.member_id */

        const result = await sendRequest(() =>
            messageRepository.create(channel_id, session.member_id, content)
        )
        
        console.log('RESULT DEL CREATE', result)
        if(result){
            setMessagesList(prev => [...prev, result])
        }
    }

    const values_provider = {
        messages_loading: loading,
        messages_list: messages_list,
        messages_error: error,
        sendMessage
    }
    
return(
    <MessagesContext.Provider 
    value={values_provider}>
        {children}
    </MessagesContext.Provider>
    )
}

export default MessagesContextProvider