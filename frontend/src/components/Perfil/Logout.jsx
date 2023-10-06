import { useHistory } from "react-router-dom";


export default function Logout (){
    let history = useHistory();
    history.push('/');
    localStorage.clear();
    return(
        alert('Cerrando Sesion')
    )
}