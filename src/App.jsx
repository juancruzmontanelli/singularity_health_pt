import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { useAuth, AuthProvider } from "./context/AuthContext";

function App() {
   const { isAuthenticated } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
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
