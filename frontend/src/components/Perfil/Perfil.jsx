import axios from "axios";
import React, {useEffect,useState} from "react";

export default function Perfil(){
    const [APIData,setAPIData] = useState([]);
    const id = parseInt(localStorage.getItem('id'))
    useEffect(()=>{
        axios.post(`http://localhost:8000/api/reservacion`,{id})
        .then((response)=>{
            console.log(id);
            console.log(response.data);
            setAPIData(response.data);
        })
    },[])
    return(
        <div>
            <div className="container">
            {
                APIData.map((data)=>{
                    return(
                        <div className="card">
      <div className="card-body">
          <span className="name">{data.id}</span><br />
          <span className="job-title"><u>{data.duracion}</u></span>
          <div className="bio">
            <p>{data.descripcion}</p>
            </div>
          <div className="bio">
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