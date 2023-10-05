import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <nav className="tab-link">
                <Link to="/Deportes"className="navbar">
                    Deportes
                </Link>
                <Link to="/Hoteles" className="navbar">
                    Hoteles
                </Link>
                <Link to="/Reservacion"className="navbar">
                    Reservacion
                </Link>
                <Link to="/Perfil" className="navbar">
                    Perfil
                </Link>
                <Link to="/Perfil" className="navbar">
                    Salir   
                </Link>
            <hr/>
	</nav>
        </div>
    )
}