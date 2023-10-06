import { Link } from "react-router-dom";

export default function Botones(){
    const rol = localStorage.getItem('rol');
    if(rol==='admin'){
        return(
    
            <div className="bio">
                <Link to="/delete">
                    <button>Eliminar</button>;
                </Link>
                <Link to="/actualizar">
                    <button>Actualizar</button>;
                </Link>
        </div>
        )
    }
}