import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Register from "./components/landing/forms/Register.tsx";
import Login from "./components/landing/forms/Login.tsx";
import NavBar from "./components/landing/navBar/NavBar.tsx";
import Landing from "./components/landing/Landing.tsx";
import Footer from "./components/landing/footer/Footer.tsx";
const ProtectedRoute = lazy(
  () => import("./components/verifyAuth/ProtectedRoute.tsx")
);
const PublicRoute = lazy(
  () => import("./components/verifyAuth/PublicRoute.tsx")
);
import Dashboard from "./components/dashboard/Dashboard.tsx";
import Loading from "./components/Loading.tsx";

function App() {
  const { pathname } = useLocation();
  const showBar = pathname === "/";
  const showFooter = !pathname.startsWith("/dashboard");

  return (
    <div>
      {showBar && <NavBar />}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PublicRoute element={<Landing />} />} />
          <Route
            path="/crear-usuario"
            element={<PublicRoute element={<Register />} />}
          />
          <Route
            path="/iniciar-sesion"
            element={<PublicRoute element={<Login />} />}
          />
          <Route
            path="/dashboard/*"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
      </Suspense>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
