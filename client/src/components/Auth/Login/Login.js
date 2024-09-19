import React, { useContext, useEffect, useState } from "react";
import loginPage from "../../../assets/loginPage.png";
import uoloLogo from "../../../assets/uoloLogo.png";
import styles from "./Login.module.css";
import { login } from "../../APIs/Auth";
import { AuthContext } from "../../../AuthContext";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../Shared/SuccessModal/SuccessModal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken, showLogoutModal, setShowLogoutModal } =
    useContext(AuthContext);

  const navigate = useNavigate();

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const data = await login({ email, password });
      if (data?.err) {
        toast.error(data.err);
      } else {
        setToken(data?.token);
        setUser(data?.user);
        toast.success("Logged in successfully!");

        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLogoutModal(false);
    }, 3000);
  }, []);

  return (
    <>
      {showLogoutModal && (
        <SuccessModal
          message={"You have been successfully logout"}
          setSuccess={setShowLogoutModal}
        />
      )}
      <div className={styles.loginContainer}>
        <div className={styles.loginLeft}>
          <img
            src={loginPage}
            alt="login-left"
          />
          <div className={styles.loginImageOverlay}></div>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginRightLogo}>
            <img
              src={uoloLogo}
              alt="uolo-logo"
            />
          </div>
          <hr className={styles.horizontalLineLogin} />
          <div className={styles.loginRightInfo}>
            <h1>Welcome back!</h1>
            <p>Log in to continue and access all the features</p>
          </div>
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Enter Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.loginBtn}
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
