import React,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

export default function Login(){
    let history = useHistory();
    const [password,setPassword] = useState("");
    const [correo,setCorreo] = useState("");
    
    const logearse = () => {
        axios.post(`http://localhost:8000/api/login`,{
            correo,password
        })
        .then(()=>{
            history.push('/Deportes')
        })
        .catch((error)=>{
            if(error.response.status===404){
                console.log("asdasda");
            }
        })
        }
    return(
        <div>
            <form>
                <input type="email" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault()
                    logearse()}}>Login</button>
            </form>
        </div>
    )
}