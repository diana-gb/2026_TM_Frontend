import React, { useContext } from 'react'
import { ChannelContext } from '../../context/ChannelContext'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import SlackLogo from '../../componentes/SlackLogo/SlackLogo'

const ChannelScreen = () => {
    const {workspace_id} = useParams()
    const navigate = useNavigate()
const {channel_list_loading, channel_list, channel_list_error}= useContext(ChannelContext)
console.log(channel_list) 

if(channel_list_loading || !channel_list){
    return <SlackLogo/>
}

return (
        <div>
            <Link to='/home'>Volver</Link>
            <h1>ChannelScreen</h1>
            {
                channel_list_error && <span>{channel_list_error.message}</span>
            }
            {
                channel_list.data.channels && channel_list.data.channels.length > 0 && channel_list.data.channels.map((channel ) => {
                
                    return (
                        <div 
                        key={channel.id} onClick={() =>
                            navigate(`/workspace/${workspace_id}/channels/${channel.id}/messages`)
                        }>
                            {channel.name}
                            </div>
                    )
                }
            )
            } 
            
            {
                channel_list.data.channels && channel_list.data.channels.length === 0 && <span>No hay canales en este espacio de trabajo</span>
            }
        </div>
    )
}

export default ChannelScreen
