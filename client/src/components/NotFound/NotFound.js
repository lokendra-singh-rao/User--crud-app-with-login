import React, { useEffect } from "react";
import notFound from "../../assets/notFound.png";
import styles from "./NotFound.module.css";

function NotFound({ setTeamPageActive }) {
  useEffect(() => {
    setTeamPageActive(null);
  }, []);

  return (
    <div className={styles.notFound}>
      <img
        src={notFound}
        alt="pageNotFound"
      />
      <h1>Page Not Found!</h1>
    </div>
  );
}

export default NotFound;
