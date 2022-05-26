import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSession from "./components/LoginSession";
import AdminLayout from "./layouts/AdminLayout";
import { Dashboard, Profile } from "./pages/admin";
import { Login, Register } from "./pages/auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route index element={<Login />} />
          </Route>

          {/* Private Route */}
          <Route element={<LoginSession />}>
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/profile" index element={<Profile />} />
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1>404 Not Found</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
