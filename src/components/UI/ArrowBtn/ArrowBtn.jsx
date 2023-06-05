import React from "react";
import styles from "./ArrowBtn.module.css";

const ArrowBtn = ({ hide, ...props }) => {
  return (
    <button {...props} className={styles.btn}>
      {hide ? '↓' : '↑'}
    </button>
  );
};

export default ArrowBtn;
