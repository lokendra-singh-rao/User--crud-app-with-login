import React from "react";
import styles from "./FormInput.module.css";

function FormInput({
  placeholder,
  fieldName,
  type,
  name,
  value,
  handleChange,
  isError,
  errorMessage,
}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>
        {fieldName}
        <span className={styles.mandatoryField}>*</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {isError ? (
        <p className={styles.inputError}>{errorMessage}</p>
      ) : (
        <p className={styles.inputError}></p>
      )}
    </div>
  );
}

export default FormInput;
