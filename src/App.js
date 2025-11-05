import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import {Login} from './pages/login/login.tsx';
import {SignUp} from './pages/register/signup.tsx';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/register' Component={SignUp}/>
      </Routes>
    </Router>
  );
}

export default App;
