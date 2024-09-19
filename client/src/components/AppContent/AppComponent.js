import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../Auth/Login/Login.js";
import TeamPage from "../Team/TeamPage/TeamPage.js";
import CreateProfile from "../Profile/CreateProfile/CreateProfile";
import NotFound from "../NotFound/NotFound.js";
import Header from "../Shared/Header/Header.js";
import Sidebar from ".././Shared/Sidebar/Sidebar";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext.js";
import styles from "./AppComponent.module.css";

export function AppContent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [teamPageActive, setTeamPageActive] = useState(null);
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }
  return (
    <>
      {token && <Header setShowSidebar={setShowSidebar} />}
      <div className={styles.mainContent}>
        {token && (
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            teamPageActive={teamPageActive}
            setTeamPageActive={setTeamPageActive}
          />
        )}

        <Routes>
          {token && (
            <Route
              path="/"
              element={<TeamPage setTeamPageActive={setTeamPageActive} />}
            />
          )}
          {token && (
            <Route
              path="/create-profile"
              element={<CreateProfile setTeamPageActive={setTeamPageActive} />}
            />
          )}
          <Route
            path="/login"
            element={token ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="*"
            element={
              token ? (
                <NotFound setTeamPageActive={setTeamPageActive} />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}
