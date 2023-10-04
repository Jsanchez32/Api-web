import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"



export default function CreateReservation(){
    let history = useHistory();
    const [idUsuario,setUsuario] = useState("");
    const [idDeporte,setDeporte] = useState("");
    const [fecha,setFecha] = useState("");
    const [cantidadParticipantes,setCantidad] = useState("");

    const addReservation = ()=>{
        axios.post(`localhost:8000/api/Deportes/add`,{
            idUsuario,idDeporte,fecha,cantidadParticipantes
        })
        .then(()=>{
            history.push('/');
        })
    }

    return(
        <div>
            <form>
                <div>
                    <label>Usuario</label>
                    <input value={idUsuario} onChange={(e)=>setUsuario(e.target.value)}></input>
                </div>
                <div>
                    <label>Deporte</label>
                    <input value={idDeporte} onChange={(e)=>setDeporte(e.target.value)}></input>
                </div>
                <div>
                    <label>Fecha</label>
                    <input type="date" value={fecha} onChange={(e)=>setFecha(e.target.value)}></input>
                </div>
                <div>
                    <label>Cantidad Participantes</label>
                    <input type="number" value={cantidadParticipantes} onChange={(e)=>setCantidad(e.target.value)}></input>
                </div>
                <button type="submit" onClick={addReservation}>Insertar</button>
            </form>
        </div>
    )
}