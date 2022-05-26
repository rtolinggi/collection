import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return !isAuth ? <Outlet /> : <Navigate to="/admin" />;
};

export default PublicRoute;
