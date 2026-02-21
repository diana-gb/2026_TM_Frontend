import { useParams } from 'react-router'
import './MessagesContext.js'
import useRequest from '../hooks/useRequest'
import { useEffect } from 'react'
import getMessages from '../services/messagesService'
import MessagesContext from './MessagesContext.js'
const MessagesContextProvider = ({children}) => {

    const{workspace_id, channel_id} = useParams()

    const {loading, response, error, sendRequest} = useRequest()

    useEffect(
        () => {
            if(workspace_id && channel_id){
                sendRequest( () =>
                        getMessages(workspace_id, channel_id)
                )
            }
        },
        [workspace_id, channel_id]
    )

    const values_provider = {
        messages_loading: loading,
        messages_list: response?.data?.messages || [],
        messages_error: error
    }
    
return(
    <MessagesContext.Provider 
    value={values_provider}>
        {children}
    </MessagesContext.Provider>
    )
}

export default MessagesContextProvider