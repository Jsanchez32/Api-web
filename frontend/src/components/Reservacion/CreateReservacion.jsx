import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"



export default function CreateReservation(){
    let history = useHistory();
    const [idUsuario,setUsuario] = useState("");
    const [idDeporte,setDeporte] = useState("");
    const [fecha,setFecha] = useState("");
    const [cantidadParticipantes,setCantidad] = useState("");
    const [APIDeportes, setAPIDeportes] = useState([]);
    const [APIHoteles, setAPIHoteles] = useState([]);
    
    const addReservation = ()=>{
        axios.post(`localhost:8000/api/Reservaciones/add`,{
            idUsuario,idDeporte,fecha,cantidadParticipantes
        })
        .then(()=>{
            history.push('/');
        })
    }   

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Deportes/get`)
            .then((response) => {
                console.log(response.data);
                setAPIDeportes(response.data);
            })
            axios.get(`http://localhost:8000/api/Hoteles/get`)
            .then((response) => {
                console.log(response.data);
                setAPIHoteles(response.data);
            })
    }, [])

    return(
        <div>
            <form class="form">
                <p class="title">Reservacion </p>
                <p class="message">Registra tu actividad Extrema</p>
                <label>
                    <select name="" id="">
                        <option>Seleccione el Deporte</option>
                        {
                            APIDeportes.map((data)=>{
                                return(
                                    <option value={data.id}>{data.nombreDeporte}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label>
                    <input required=""  type="date" class="input" />
                    <span>Fecha</span>
                </label>

                <label>
                    <input required=""  type="number" class="input" />
                    <span>Cantidad Personas</span>
                </label>
                <select name="" id="">
                        <option>Seleccione el Hotel a Reservar</option>
                        {
                            APIHoteles.map((data)=>{
                                return(
                                    <option value={data.id}>{data.nombre}</option>
                                )
                            })
                        }
                    </select>

                <button class="submit">Submit</button>
            </form>

        </div>
    )
}