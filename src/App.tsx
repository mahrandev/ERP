import "@fontsource/alexandria/400.css";
import "@fontsource/alexandria/500.css";
import "@fontsource/alexandria/600.css";
import "@fontsource/alexandria/700.css";
import "@fontsource/alexandria/900.css";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/*"
          element={
            <DashboardLayout>
              <MainRoutes />
            </DashboardLayout>
          }
        />
      </Route>
    </Routes>
  );
}

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      {/* Add other dashboard routes here */}
    </Routes>
  );
};

export default App;
