import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import { Dashboard, User } from "../pages/admin";
import { Login, Register } from "../pages/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Auth />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Login />} />
        </Route>

        {/* Protected Route */}
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<User />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
