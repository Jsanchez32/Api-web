import axios from "axios";
import ubicacion from "../../assets/svg/logo.svg"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ReadHoteles() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Hoteles/get`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })
    }, [])

    return (
        <div className="container">
            {
                APIData.map((data) => {
                    return (
                        <div className="card">
                            <div className="card-header" style={{ backgroundImage: `url(${data.img})` }}>

                            </div>

                            <div className="card-body">
                                <span className="name">{data.nombre}</span><br />
                                <div className="bio">
                                    <p><img className="ubicacion" src={ubicacion} alt="ubicacion.svg" />{data.ubicacion}</p>
                                </div>
                                <div className="reservacion">
                                    <Link to="/Reservacion">
                                        <button>
                                            <span>Reservar</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="stats">
                                    <div className="stat">
                                        <span className="label">Precio Noche</span>
                                        <span className="value">{data.precioPorNoche} COL</span>
                                    </div>
                                    <div className="stat">
                                        <span className="label">Estrellas</span>
                                        <span className="value">{data.estrellas}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

