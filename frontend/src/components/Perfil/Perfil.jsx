import axios from "axios";
import React, { useState } from "react";
import Botones from "./Btn";

export default function Perfil() {
    const [APIData, setAPIData] = useState([]);
    const rol = localStorage.getItem('rol');
    const id = parseInt(localStorage.getItem('id'))
    if(rol==='user'){
        axios.post(`http://localhost:8000/api/reservacion`, { id })
            .then((response) => {
                console.log(id);
                console.log(response.data);
                setAPIData(response.data);
            })
        }
    if(rol==='admin'){
            axios.get(`http://localhost:8000/api/admin`)
                .then((response)=>{
                    setAPIData(response.data);
                })
        }
    return (
        <div>
            <div className="container">
                {
                    APIData.map((data) => {
                        return (
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: `url(https://www.shutterstock.com/shutterstock/photos/2093294938/display_1500/stock-vector-reservation-icon-thin-linear-reservation-outline-icon-isolated-on-white-background-line-vector-2093294938.jpg)` }}>
                                </div>
                                <div className="card-body">
                                    <span className="name">{data.nombreDeporte}</span><br />
                                    <span className="job-title"><u></u></span>
                                    <div className="bio">
                                        <p>{data.fecha}</p>
                                    </div>
                                    <div className="bio">
                                        <p>{data.estado}</p>
                                    </div>
                                    <div className="bio">
                                        <p>Instructor: {data.nombreGuia}</p>
                                    </div>
                                    <Botones></Botones>
                                </div>

                                <div className="card-footer">
                                    <div className="stats">
                                        <div className="stat">

                                            <span className="label">Precio</span>
                                            <span className="value">{data.precioTotal} COL</span>
                                        </div>
                                        <div className="stat">
                                            <span className="label">Personas</span>
                                            <span className="value">{data.cantidadParticipantes}</span>
                                        </div>
                                    </div>
                                    <div className="reservacion">
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}