import "./App.css";
import Router from "./routes";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";

import { CssBaseline } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <CssBaseline>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </CssBaseline>
  );
}

export default App;
