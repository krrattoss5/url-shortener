import { Route, Routes } from 'react-router-dom';
import './App.css'
// import CreateShortURL from './components/createShortURL/CreateShortURL'
import SingleShort from './components/singleShort/SingleShort';
import Register from './components/register/Register.tsx';
import Login from './components/login/Login.tsx';
import NavBar from './components/navBar/NavBar.tsx';
import Landing from './components/landing/Landing.tsx';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/crear-usuario' element={<Register />} />
        <Route path='/iniciar-sesion' element={<Login />} />
        <Route path='/:shortId' element={<SingleShort />} />
      </Routes>
    </div>
  );
}

export default App
