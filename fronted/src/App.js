import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Admin';
import Customer from './Customer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
 
      <Route  path='/' element={<Login/>}/>
      <Route  path='/Admin' element={<Admin/>}/>
      <Route  path='/Customer' element={<Customer/>}/>
    </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
