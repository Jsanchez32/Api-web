import ReadDeportes from './components/Deportes/ReadDeportes';
import ReadHoteles from './components/Hoteles/ReadHotel';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import NavBar from './components/Navbar';
import Perfil from './components/Perfil/Perfil';
import "./assets/css/navbar.css";
import "./assets/css/card.css"
import "./assets/css/form.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logout from './components/Perfil/Logout';


function App() {
  return (
  <Router>
    <header>
      <NavBar></NavBar>
    </header>
        <Route exact path = "/Deportes" component={ReadDeportes}></Route>
        <div>
          <Route exact path = "/Hoteles" component={ReadHoteles}></Route>
        </div>
        <div>
          <Route exact path = "/" component={Login}></Route>
        </div>
        <div>
          <Route exact path = "/Register" component={Register}></Route>
        </div>
        <div>
          <Route exact path = "/Perfil" component={Perfil}></Route>
        </div>
        <div>
          <Route exact path = "/Salir" component={Logout}></Route>
        </div>
  </Router>
  );
}

export default App;