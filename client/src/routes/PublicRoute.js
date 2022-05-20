import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  //   let isAuth = JSON.parse(localStorage.getItem("isAuth"));
  return !isAuth ? <Outlet /> : <Navigate to='/admin' />;
};

export default PublicRoute;
