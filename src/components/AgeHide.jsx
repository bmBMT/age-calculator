import React from "react";
import styles from "../styles/AgeHide.module.css";
import ArrowBtn from "./UI/ArrowBtn/ArrowBtn";

const AgeHide = ({ hide, onClick }) => {
  return (
    <div className={styles.ageHide}>
      <hr />
      <ArrowBtn hide={hide} onClick={onClick} />
    </div>
  );
};

export default AgeHide;
