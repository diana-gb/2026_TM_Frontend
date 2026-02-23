import { createContext } from "react";
import { sendMessage } from "../services/messagesService";

const MessagesContext = createContext(

    {
        messages_loading: false,
        messages_list: [],
        messages_error: null,
        sendMessage
    }

)


export default MessagesContext