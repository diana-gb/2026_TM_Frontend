import "./ChanneItem.css"
const ChannelItem = ({ channel, workspace_id, onNavigate }) => {

    return (
        <div
            className="channel-item"
            onClick={() =>
                onNavigate(
                    `/workspace/${workspace_id}/channels/${channel.id}/messages`
                )
            }
        >
            <span className="channel-name">
                # {channel.name}
            </span>
        </div>
    )
}

export default ChannelItem