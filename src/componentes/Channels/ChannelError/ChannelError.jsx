import "./ChannelError.css"
const ChannelError = ({ error }) => {

    if (!error) return null

    return (
        <div className="channels-error">
            {error.message}
        </div>
    )
}

export default ChannelError