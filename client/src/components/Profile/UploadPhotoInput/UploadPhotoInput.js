import React from "react";
import uploadImageIcon from "../../../assets/uploadImageIcon.png";
import uploadIcon from "../../../assets/uploadIcon.png";
import styles from "./UploadPhotoInput.module.css";

function UploadPhotoInput({ image, handleFileChange }) {
  return (
    <div className={styles.photoUpload}>
      <label className={styles.photoUploadLabel}>
        Upload Photo<span className={styles.mandatoryField}>*</span>
      </label>
      <p>Upload passport size photo</p>
      <div className={styles.avatarPlaceholder}>
        <img
          src={image?.preview !== "" ? image?.preview : uploadImageIcon}
          alt="Avatar placeholder"
        />
        <div className={styles.uploadBtn}>
          <input
            name="image"
            type="file"
            id={styles.uploadInput}
            hidden
            onChange={(e) => {
              handleFileChange(e);
            }}
            accept=".png, .jpg, .jpeg"
          />
          <label
            htmlFor={styles.uploadInput}
            className={styles.uploadIcon}
          >
            <img
              src={uploadIcon}
              alt="upload-icon"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default UploadPhotoInput;
