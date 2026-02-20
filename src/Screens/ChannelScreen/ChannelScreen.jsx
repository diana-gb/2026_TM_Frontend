import React, { useContext } from 'react'
import { ChannelContext } from '../../context/ChannelContext'

const ChannelScreen = () => {
const {channel_list_loading, channel_list, channel_list_error}= useContext(ChannelContext)
console.log(channel_list) 

if(channel_list_loading || !channel_list){
    return <span>Loading ... </span>
}

return (
        <div>
            <h1>ChannelScreen</h1>
            {
                channel_list_error && <span>{channel_list_error.message}</span>
            }
            {
                channel_list.data.channels && channel_list.data.channels.length > 0 && channel_list.data.channels.map(
                    channel => <div key={channel.id}>{channel.name}</div>
                )
            }
            {
                channel_list.data.channels && channel_list.data.channels.length === 0 && <span>No hay canales en este espacio de trabajo</span>
            }
        </div>
    )
}

export default ChannelScreen
