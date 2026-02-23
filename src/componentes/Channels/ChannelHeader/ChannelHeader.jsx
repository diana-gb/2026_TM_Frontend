import { Link } from "react-router-dom"
import './ChannelHeader.css'
const ChannelHeader = () => {
    return (
        <div className="channels-header">
            <Link to="/home" className="back-link">
                ← Volver
            </Link>
            <h1>Canales</h1>
        </div>
    )
}

export default ChannelHeader