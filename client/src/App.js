import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import { Login, Register } from "./pages/auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<PublicRoute />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route index element={<Login />} />
          </Route>

          {/* Private Route */}
          <Route path='/admin' element={<PrivateRoute />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route index element={<Dashboard />} />
          </Route>
          <Route
            path='*'
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
