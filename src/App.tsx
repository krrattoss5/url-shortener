import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css'
// import CreateShortURL from './components/createShortURL/CreateShortURL'
import Register from './components/register/Register.tsx';
import Login from './components/login/Login.tsx';
import NavBar from './components/navBar/NavBar.tsx';
import Landing from './components/landing/Landing.tsx';
import Footer from './components/footer/Footer.tsx';
const ProtectedRoute = lazy(() => import('./components/verifyAuth/ProtectedRoute.tsx'))
const PublicRoute = lazy(() => import('./components/verifyAuth/PublicRoute.tsx'))
import Dashboard from './components/dashboard/Dashboard.tsx';

function App() {
  const {pathname} = useLocation()
  const showBar = !(
    pathname !== '/iniciar-sesion'
    && pathname !== '/crear-usuario'
    && pathname.startsWith('/dashboard'))
  const showFooter = !pathname.startsWith('/dashboard')



  return (
    <div>
      {showBar && <NavBar />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<PublicRoute element={<Landing />} />} />
          <Route path='/crear-usuario' element={<PublicRoute element={<Register />} />} />
          <Route path='/iniciar-sesion' element={<PublicRoute element={<Login />} />} />
          <Route path='/dashboard/*' element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </Suspense>
      {showFooter && <Footer />}
    </div>
  );
}

export default App
