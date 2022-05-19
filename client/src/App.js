import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/admin/Dashboard";
import { Login, Register } from "./pages/auth";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Private Route */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
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
