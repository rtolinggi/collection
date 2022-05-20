import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  //   let isAuth = JSON.parse(localStorage.getItem("isAuth"));
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
