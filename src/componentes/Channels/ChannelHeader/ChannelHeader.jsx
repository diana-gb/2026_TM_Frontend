import { Link } from "react-router-dom"
import './ChannelHeader.css'
import ICONOS from "../../../Constantes/iconos"
const ChannelHeader = () => {
    return (
        <div className="channels-header">
            <Link to="/home" className="back-link">
                <ICONOS.flecha2/>
            </Link>
            <h1>Canales</h1>
        </div>
    )
}

export default ChannelHeader