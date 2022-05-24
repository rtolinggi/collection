import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  authenticateUser,
  getSession,
  unauthenticateUser,
} from "../features/auth/authSlice";

const LoginSession = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const cekSessionLogin = async () => {
      try {
        const response = await dispatch(getSession()).unwrap();
        if (!response.isLogin) {
          dispatch(unauthenticateUser());
          navigate("/");
          return;
        }
        dispatch(authenticateUser());
      } catch (error) {
        console.log(error);
      }
    };
    cekSessionLogin();
    // !isAuth && cekSessionLogin();
    // eslint-disable-next-line
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default LoginSession;
