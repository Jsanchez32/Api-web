import React, {useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"


export default function CreateReservation(){
    const [APIDeportes, setAPIDeportes] = useState([]);
    const [APIHoteles, setAPIHoteles] = useState([]);
    const [APIReservaciones, setAPIReservaciones] = useState([]);

    let history = useHistory();

    const idUsuario = parseInt(localStorage.getItem('id'));
    const [idDeporte,setDeporte] = useState(1);
    const [idHotel,setIdHotel] = useState(1);
    const [fecha,setFecha] = useState("");
    const [telefono,setTelefono] = useState("");
    const [nombre,setNombre] = useState("");
    const [cantidadParticipantes,setCantidad] = useState("");
    const idReserva = parseInt(APIReservaciones.length);
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
            axios.get(`http://localhost:8000/api/Reservaciones/get`)
            .then((response) => {
                console.log(response.data);
                setAPIReservaciones(response.data);
            })
    }, [])

    const addReservation = ()=>{
        axios.post(`http://localhost:8000/api/Reservaciones/add`,{
            idReserva,idUsuario,idDeporte,idHotel,fecha,cantidadParticipantes,telefono,nombre,estado:'Pendiente',precioTotal: parseInt(APIDeportes[idDeporte].precioPersona*cantidadParticipantes)
        })
        .then(()=>{
            history.push('/');
        })
    }   



    return(
        <div className="container">
            <form class="form">
                <p class="title">Reservacion </p>
                <p class="message">Registra tu actividad Extrema</p>
                <label>
                    <select required name="" id="" onChange={(e)=>setDeporte(parseInt(e.target.value))}>
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
                    <input required value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" class="input" />
                    <span>Nombre</span>
                </label>
                <label>
                    <input required value={fecha} onChange={(e)=>setFecha(e.target.value)} type="date" class="input" />
                    <span>Fecha</span>
                </label>
                <label>
                    <input required value={telefono} onChange={(e)=>setTelefono(e.target.value)} type="text" class="input" />
                    <span>Telefono</span>
                </label>

                <label>
                    <input required value={cantidadParticipantes} onChange={(e)=>setCantidad(parseInt(e.target.value))} type="number" class="input" />
                    <span>Cantidad Personas</span>
                </label>
                <label>
                <select name="" id="" required onChange={(e)=>setIdHotel(parseInt(e.target.value))}>
                        <option>Seleccione el Hotel a Reservar</option>
                        {
                            APIHoteles.map((data)=>{
                                return(
                                    <option value={data.id}>{data.nombre} </option>
                                )
                            })
                        }
                    </select>
                    </label>
                <div className="enviar">
                <button class="submit" onClick={(e)=>{e.preventDefault();addReservation()}}>Submit</button>

                </div>
            </form>

        </div>
    )
}