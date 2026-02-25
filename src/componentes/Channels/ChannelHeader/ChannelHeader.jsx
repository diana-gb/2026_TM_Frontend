import { Link } from "react-router-dom"
import './ChannelHeader.css'
import ICONOS from "../../../Constantes/iconos"
const ChannelHeader = () => {
    return (
        <div className="channels-header">
            <Link to="/home" className="back-link">
                volver
            </Link>
            <h1>Canales</h1>
        </div>
    )
}

export default ChannelHeader