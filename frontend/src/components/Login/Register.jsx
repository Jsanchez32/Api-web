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
        <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <form class="login">
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="email" class="login__input" value={correo} onChange={(e)=>setCorreo(e.target.value)} placeholder="Email"/>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="text" class="login__input" value={password} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" class="login__input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                        <button class="button login__submit" type="submit" onClick={(e)=>{e.preventDefault();logearse()}}>
                            <span class="button__text">Register Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    </div>
    )
}