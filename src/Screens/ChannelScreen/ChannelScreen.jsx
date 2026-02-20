import React, { useContext } from 'react'
import { ChannelContext } from '../../context/ChannelContext'

const ChannelScreen = () => {
const {channel_list_loading, channel_list, channel_list_error}= useContext(ChannelContext)
console.log(channel_list) 

if(channel_list_loading || !channel_list){
    return <span>Loading ... </span>
}

return (
        <div>ChannelScreen</div>
    )
}

export default ChannelScreen
