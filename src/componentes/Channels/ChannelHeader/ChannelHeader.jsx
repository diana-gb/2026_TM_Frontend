import { Link } from "react-router-dom"
import './ChannelHeader.css'
import ICONOS from "../../../Constantes/iconos"
const ChannelHeader = ({onCreateChannel}) => {

        const handleClick = () => {
        const name = prompt("Nombre del nuevo canal")
        if (name) {
            onCreateChannel(name)
        }
    }

    return (
        <div className="channels-header">
            <h1>Canales</h1>


            <div className="channels-header-left">
                
            <Link to="/home" className="back-link">
                <ICONOS.flecha2/>
            </Link>

            <button 
                className="create-channel-button"
                onClick={handleClick}
                >
                <ICONOS.mas/>
            </button>
                </div>

        </div>
    )
}

export default ChannelHeader