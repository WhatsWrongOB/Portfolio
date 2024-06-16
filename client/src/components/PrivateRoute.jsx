import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {


  const isAuthenticated = useSelector((state) => state.auth.authentication);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
