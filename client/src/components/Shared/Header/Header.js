import React, { useContext, useState } from "react";
import uoloLogo from "../../../assets/uoloLogo.png";
import logoutIcon from "../../../assets/logoutIcon.png";
import arrowDown from "../../../assets/arrowDown.svg";
import navbarMenu from "../../../assets/navbarMenu.png";
import userMenu from "../../../assets/userMenu.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AuthContext } from "../../../AuthContext";
import { useLogout } from "../../APIs/Auth";

const Navbar = ({ setShowSidebar }) => {
  const { user, setShowLogoutModal } = useContext(AuthContext);
  const [logoutDropdown, setLogoutDropdown] = useState(false);

  const logout = useLogout();
  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    setShowLogoutModal(true);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarMenu}>
        <img
          onClick={() => {
            setShowSidebar(true);
          }}
          src={navbarMenu}
          alt="navbarMenu"
        />
      </div>
      <div className={styles.navbarLogo}>
        <Link to={"/team"}>
          <img
            src={uoloLogo}
            alt="navbar-logo"
          />
        </Link>
      </div>
      <div className={styles.navbarUser}>
        <div className={styles.navbarUserIcon}>
          <img
            src={user.image}
            alt="user-logo"
          />
        </div>
        <div className={styles.navbarUserInfo}>
          <div className={styles.navbarUserName}>{user.name}</div>
          <div
            onClick={() => setLogoutDropdown(!logoutDropdown)}
            className={styles.navbarUserDropdown}
          >
            <img
              src={arrowDown}
              alt="arrowDown"
            />
          </div>
        </div>
        {logoutDropdown && (
          <div className={styles.navbarLogoutButton}>
            <button onClick={(e) => handleLogout(e)}>
              <img src={logoutIcon} /> Logout
            </button>
          </div>
        )}
      </div>
      <div className={styles.navbarUserMenu}>
        <img
          src={userMenu}
          alt="userMenu"
        />
      </div>
    </div>
  );
};

export default Navbar;
