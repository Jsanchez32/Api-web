import ReadDeportes from './components/Deportes/ReadDeportes';
import ReadHoteles from './components/Hoteles/ReadHotel';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import NavBar from './components/Navbar';
import "./assets/css/navbar.css";
import "./assets/css/card.css"
import "./assets/css/form.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


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
  </Router>
  );
}

export default App;