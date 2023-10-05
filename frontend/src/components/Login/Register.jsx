import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"


export default function Register(){
    let history = useHistory();
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [rol,setRol] = useState("user");
    const [correo,setCorreo] = useState("");
    
    const [APIUser, setAPIUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Usuarios/get`)
            .then((response) => {
                setAPIUser(response.data);
            })
    }, [])

    const id = APIUser.length +1
    const logearse = () => {
        axios.post(`http://localhost:8000/api/Usuarios/add`,{
            id,correo,password,username,rol
        })
        .then(()=>{
            alert("Registrado")
            history.push('/Login')
        })
        .catch((error)=>{
            if(error.response.status===404){
                alert('El email ya esta registrado')
            }})
        }
    return(
        <div>
            <form>
                <input type="email" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault()
                    logearse()}}>Register</button>
            </form>
        </div>
    )
}