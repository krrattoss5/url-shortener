import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../constants";

interface Props {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: Props) => {
  console.log();
  return isAuthenticated() ? element : <Navigate to="/iniciar-sesion" />;
};

export default ProtectedRoute;
