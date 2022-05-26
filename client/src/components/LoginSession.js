import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Flex } from "@chakra-ui/react";
import {
  authenticateUser,
  getSession,
  unauthenticateUser,
} from "../features/auth/authSlice";

const LoginSession = () => {
  const { isLoading, isAuth } = useSelector((state) => state.auth);
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
    !isAuth && cekSessionLogin();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Flex align="center" justify="center" w="100%" h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary.600"
            size="xl"
          />
        </Flex>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default LoginSession;
