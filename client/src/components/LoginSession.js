import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSession } from "../features/auth/authSlice";

const LoginSession = () => {
  const { isAuth, isLoading, entities } = useSelector((state) => state.auth);
  console.log(isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const cekSessionLogin = async () => {
      try {
        const response = await dispatch(getSession()).unwrap();
        console.log(response);
        if (!response.isLogin) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    !isAuth && cekSessionLogin();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(`is Loading : ${isLoading}`);
    console.log(`data : ${entities}`);
  }, [isLoading, entities]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default LoginSession;
