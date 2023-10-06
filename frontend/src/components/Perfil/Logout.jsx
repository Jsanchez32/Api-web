import { useHistory } from "react-router-dom";


export default function Logout (){
    let history = useHistory();
    history.push('/Login');
    localStorage.clear();
    return(
        alert('Cerrando Sesion')
    )
}