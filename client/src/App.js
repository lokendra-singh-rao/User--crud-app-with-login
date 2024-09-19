import "./App.css";
import { BrowserRouter as Router, json } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "./components/AppContent/AppComponent";
import { AuthContext } from "./AuthContext";
import { ToastContainer, Zoom } from "react-toastify";
import Cookies from "js-cookie";

function App() {
  const [user, setUser] = useState({
    name: "",
  });
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    try {
      if (Cookies.get("token")) {
        setToken(Cookies.get("token"));
      }
      if (Cookies.get("user")) {
        setUser(JSON.parse(Cookies.get("user")));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        loading,
        showLogoutModal,
        setShowLogoutModal,
      }}
    >
      <div className="app">
        <ToastContainer
          position="top-center"
          limit={3}
          autoClose={1500}
          theme="dark"
          transition={Zoom}
          hideProgressBar
          closeOnClick={false}
          draggable={false}
          newestOnTop
        />
        <Router>
          <AppContent />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
