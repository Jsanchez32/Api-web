import Read from './components/ReadReservacion';
import "./App.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from "semantic-ui-react";


function App() {
  return (
  <Router>
    <div className='main'>
      <h2 className='main-header'>Trabajo de CL</h2>
      <Link to="/create">
      <Button>Crear Usuario</Button>
      </Link>
      <div>
        <Route exact path = "/" component={Read}></Route>
      </div>
    </div>
  </Router>
  );
}

export default App;