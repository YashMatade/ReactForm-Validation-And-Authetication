import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    
    
    <Routes>
    
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/users" element={<Users />}/>

    </Routes>




    </BrowserRouter>


    </div>
  );
}

export default App;
