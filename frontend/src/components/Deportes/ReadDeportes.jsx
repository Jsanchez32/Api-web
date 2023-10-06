import axios from "axios";
import ubicacion from "../../assets/svg/logo.svg"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ReadDeportes() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Deportes/get`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })
    }, [])

    return (
        <div>
            <div className="container">
                {
                    APIData.map((data) => {
                        return (
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: `url(${data.img})` }}>

                                </div>

                                <div className="card-body">
                                    <span className="name">{data.nombreDeporte}</span><br />
                                    <span className="job-title"><u>{data.duracion}</u></span>
                                    <div className="bio">
                                        <p>{data.descripcion}</p>
                                    </div>
                                    <div className="bio">
                                        <p><img className="ubicacion" src={ubicacion} alt="ubicacion.svg" />{data.ubicacion}</p>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="stats">
                                        <div className="stat">
                                            <span className="label">Precio</span>
                                            <span className="value">{data.precioPersona} COL</span>
                                        </div>
                                        <div className="stat">
                                            <span className="label">Dificultad</span>
                                            <span className="value">{data.dificultad}</span>
                                        </div>
                                    </div>
                                    <div className="reservacion">
                                        <Link to="/Reservacion">
                                            <button>
                                                <span>Reservar</span>
                                            </button>
                                        </Link>
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

