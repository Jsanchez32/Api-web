import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBar from "../Navbar";

export default function Update() {
    let history = useHistory();
    const [APIDeportes, setAPIDeportes] = useState([]);
    const [APIHoteles, setAPIHoteles] = useState([]);
    const [idUsuario, setIdUsuario] = useState(0);
    const [idReserva, setIdReserva] = useState(0);
    const [idDeporte, setIdDeporte] = useState(0);
    const [idHotel, setIdHotel] = useState(0);
    const [fecha, setFecha] = useState(false);
    const [cantidadParticipantes, setCantidadParticipantes] = useState(0);
    const [telefono, setTelefono] = useState("");
    const [nombre, setNombre] = useState("");
    const [estado, setEstado] = useState("");

    useEffect(() => {
        setIdUsuario(localStorage.getItem("idUsario"));
        setIdDeporte(localStorage.getItem("idDeporte"));
        setIdHotel(localStorage.getItem("idHotel"));
        setFecha(localStorage.getItem("fecha"));
        setCantidadParticipantes(localStorage.getItem("cantidadParticipantes"));
        setTelefono(localStorage.getItem("telefono"));
        setNombre(localStorage.getItem("nombre"));
        setEstado(localStorage.getItem("estado"));
        setIdReserva(localStorage.getItem("idReserva"));

        axios.get(`http://localhost:8000/api/Hoteles/get`)
            .then((response) => {
                console.log(response.data);
                setAPIHoteles(response.data);
            })

        axios.get(`http://localhost:8000/api/Deportes/get`)
            .then((response) => {
                console.log(response.data);
                setAPIDeportes(response.data);
            })
    }, []);

    const updateApiData = () => {
        axios.put(`http://localhost:8000/api/Reservaciones/upd/${idReserva}`, {
            idDeporte, idHotel, fecha, cantidadParticipantes, telefono, nombre, estado
        }).then(() => {
            history.push('/Perfil')
        })
    }

    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <div className="container">
                <form class="form">
                    <p class="title">Update </p>
                    <p class="message">Actualiza tu actividad Extrema</p>
                    <label>
                        <select onChange={(e) => setIdDeporte(parseInt(e.target.value))}>
                            <option>Seleccione el Deporte</option>
                            {
                                APIDeportes.map((data) => {
                                    return (
                                        <option value={data.id}>{data.nombreDeporte}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <label>
                        <input required value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" class="input" />
                        <span>Nombre</span>
                    </label>
                    <label>
                        <input required value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" class="input" />
                        <span>Fecha</span>
                    </label>
                    <label>
                        <input required value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" class="input" />
                        <span>Telefono</span>
                    </label>

                    <label>
                        <input required value={cantidadParticipantes} onChange={(e) => setCantidadParticipantes(parseInt(e.target.value))} type="number" class="input" />
                        <span>Cantidad Personas</span>
                    </label>
                    <label>
                        <input required value={estado} onChange={(e) => setEstado(parseInt(e.target.value))} type="text" class="input" />
                        <span>Estado</span>
                    </label>
                    <label>
                        <select onChange={(e) => setIdHotel(parseInt(e.target.value))}>
                            <option>Seleccione el Hotel a Reservar</option>
                            {
                                APIHoteles.map((data) => {
                                    return (
                                        <option value={data.id}>{data.nombre} </option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <div className="enviar">
                        <button class="submit" onClick={(e) => { e.preventDefault(); updateApiData() }}>Actualizar</button>

                    </div>
                </form>

            </div>
        </div>
    )
}