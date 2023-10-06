import React, { useEffect, useState } from "react";
import "../../assets/css/login.css"
import axios from "axios";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Login() {
    let history = useHistory();
    const [password, setPassword] = useState("");
    const [correo, setCorreo] = useState("");


    const logearse = () => {
        axios.post(`http://localhost:8000/api/login`, {
            correo, password
        })
            .then(() => {
                history.push('/Deportes')
                axios.post(`http://localhost:8000/api/user`, { correo })
                    .then((response) => {
                        localStorage.setItem('id', response.data.id)
                        localStorage.setItem('username', response.data.username)
                        localStorage.setItem('correo', response.data.correo)
                        localStorage.setItem('password', response.data.password)
                        localStorage.setItem('rol', response.data.rol)
                    })
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    alert('Email o contraseña incorrecta')
                }
            })
    }
    return (
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
                                <input type="password" class="login__input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                            </div>
                            <button class="button login__submit" type="submit" onClick={(e)=>{e.preventDefault();logearse()}}>
                                <span class="button__text">Log In Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div class="social-login">
                            <Link to="Register">
                                <h3 className="register">Register</h3>
                            </Link>
                            <div class="social-icons">
                                <a href="#" class="social-login__icon fab fa-instagram"></a>
                                <a href="#" class="social-login__icon fab fa-facebook"></a>
                                <a href="#" class="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
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