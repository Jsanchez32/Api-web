import axios from "axios";
import ubicacion from "../assets/svg/logo.svg"
import React, {useEffect,useState} from "react";

export default function Read(){
    const [APIData,setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Deportes/get`)
        .then((response)=>{
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
      <div className="card-header"  style={{ backgroundImage: `url(https://media.traveler.es/photos/622a11b662d4f113d6eb070c/16:9/w_2560%2Cc_limit/raf.jpg)` }}>

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
              <div className="stat">
                <span className="label">Likes</span>
                <span className="value">320</span>
              </div>
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

