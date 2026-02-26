import React, { useContext } from 'react'
import { ChannelContext } from '../../context/ChannelContext'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import SlackLogo from '../../componentes/SlackLogo/SlackLogo'
import ChannelHeader from '../../componentes/Channels/ChannelHeader/ChannelHeader'
import ChannelError from '../../componentes/Channels/ChannelError/ChannelError'
import ChannelList from '../../componentes/Channels/ChannelList/ChannelList'
import './ChannelScreen.css'
const ChannelScreen = () => {
    const {workspace_id} = useParams()
    const navigate = useNavigate()
const {channel_list_loading, channel_list, channel_list_error, handleCreateChannel }= useContext(ChannelContext)


if(channel_list_loading || !channel_list){
    return <SlackLogo/>
}

    return (

        <div className='channels-screen'>
            <div className="channels-screen-left">

                <ChannelHeader onCreateChannel={handleCreateChannel}  />

                <ChannelError error={channel_list_error} />

                <ChannelList
                    channels={channel_list?.data?.channels}
                    workspace_id={workspace_id}
                    onNavigate={navigate}
                />
            </div>
            <div className='channels-screen-rigth'>
                <p>No hay canales seleccionados</p>
            </div>
        </div>
)

}

export default ChannelScreen
