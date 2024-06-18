import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../constants";

interface Props {
  element: JSX.Element;
}

const PublicRoute = ({ element }: Props) => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : element;
};

export default PublicRoute;
