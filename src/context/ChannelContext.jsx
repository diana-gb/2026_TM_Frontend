import { createContext, useContext, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import getChannelList from "../services/channelService";
import { WorkspaceContext } from "./WorkSpaceContext";

export const ChannelContext = createContext(
    {
        channel_list_loading: false,
        channel_list: null,
        channel_list_error: null
    }
)


const ChannelContextProvider = ({ children}) => {
    
    const {workspace} = useContext(WorkspaceContext)

    const {loading, response, error, sendRequest} = useRequest()

    useEffect(
        () => {
            if(workspace?._id){
                sendRequest( () =>
                    getChannelList(workspace._id)
                )
            }
        },
        [workspace]
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
