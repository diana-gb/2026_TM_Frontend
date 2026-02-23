import ChannelItem from "../ChanneItem/ChanneItem"
import './ChannelList.css'
const ChannelList = ({ channels, workspace_id, onNavigate }) => {

    if (!channels || channels.length === 0) {
        return (
            <div className="channels-empty">
                No hay canales en este espacio de trabajo
            </div>
        )
    }

    return (
        <div className="channels-list">
            {channels.map((channel) => (
                <ChannelItem
                    key={channel.id}
                    channel={channel}
                    workspace_id={workspace_id}
                    onNavigate={onNavigate}
                />
            ))}
        </div>
    )
}

export default ChannelList