import { Route, Routes } from 'react-router-dom';
import './App.css'
import CreateShortURL from './components/createShortURL/CreateShortURL'
import SingleShort from './components/singleShort/SingleShort';
import Login from './components/login/Login.tsx';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<CreateShortURL />} />
        <Route path='/crear-usuario' element={<Login />} />
        <Route path='/:shortId' element={<SingleShort />} />
      </Routes>
    </div>
  );
}

export default App
