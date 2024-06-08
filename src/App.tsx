import { Route, Routes } from 'react-router-dom';
import './App.css'
import CreateShortURL from './components/createShortURL/CreateShortURL'
import SingleShort from './components/singleShort/SingleShort';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<CreateShortURL />} />
        <Route path='/:id' element={<SingleShort />} />
      </Routes>
    </div>
  );
}

export default App
