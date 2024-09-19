import React from "react";
import styles from "./SuccessModal.module.css";
import successIcon from "../../../assets/success.gif";

function SuccessModal({ setSuccess, message }) {
  return (
    <div
      className={styles.createProfileBackdrop}
      onClick={() => setSuccess(false)}
    >
      <div className={styles.profileCreateSuccess}>
        <div>
          <img
            className={styles.successIcon}
            src={successIcon}
            alt="success"
          />
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default SuccessModal;
