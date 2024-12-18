import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { useAuth, AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";

function App() {
   const { isAuthenticated } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}


const WrappedApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default WrappedApp;
