import React, { memo } from "react";
import styles from "../styles/AgeLayout.module.css";

const AgeLayot = ({ age, ...props }) => {
  return (
    <div {...props}>
      <div className={styles.text}>
        <span className={styles.number}>{age.years || 0}</span> years
      </div>
      <div className={styles.text}>
        <span className={styles.number}>{age.months || 0}</span> months
      </div>
      <div className={styles.text}>
        <span className={styles.number}>{age.days || 0}</span> days
      </div>
    </div>
  );
};

export default memo(AgeLayot);
