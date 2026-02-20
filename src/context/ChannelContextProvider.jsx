import { useEffect } from "react";
import useRequest from "../hooks/useRequest";
import getChannelList from "../services/channelService";
import { useParams } from "react-router";
import { ChannelContext } from "./ChannelContext";

const ChannelContextProvider = ({ children}) => {
    
    const {workspace_id} = useParams()
    console.log("workspace_id:", workspace_id)

    const {loading, response, error, sendRequest} = useRequest()

    useEffect(
        () => {
            if(workspace_id){
                sendRequest( () =>
                    getChannelList(workspace_id)
                )
            }
        },
        [workspace_id]
    )

    const provider_channel_values = {
        channel_list_loading: loading,
        channel_list: response,
        channel_list_error: error
    }

    return (
        <ChannelContext.Provider 
        value={provider_channel_values}>
            {children}
        </ChannelContext.Provider>
    )
}

export default ChannelContextProvider
