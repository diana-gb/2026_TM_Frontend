import { createContext } from "react";


export const ChannelContext = createContext(
    {
        channel_list_loading: false,
        channel_list: null,
        channel_list_error: null
    }
)


