import React from "react";
import styles from "./FormActionButtons.module.css";

function FormActionButtons({
  submitButtonDisabled,
  handleSubmit,
  handleCancel,
  submitting,
}) {
  return (
    <div className={styles.formActions}>
      <button
        type="button"
        className={styles.cancelBtn}
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button
        type="submit"
        className={submitButtonDisabled ? styles.disabledBtn : styles.saveBtn}
        onClick={handleSubmit}
        disabled={submitButtonDisabled}
      >
        {submitting ? "Saving..." : "Save"}
      </button>
    </div>
  );
}

export default FormActionButtons;
