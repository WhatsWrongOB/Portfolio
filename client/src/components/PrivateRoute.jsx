import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {


  const isAuthenticated = useSelector((state) => state.auth.authentication);
  console.log(isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
