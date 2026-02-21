import { createContext } from "react";

const MessagesContext = createContext(

    {
        messages_loading: false,
        messages_list: [],
        messages_error: null
    }
)


export default MessagesContext