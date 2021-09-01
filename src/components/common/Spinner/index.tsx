import React from "react";
import styles from "./styles.module.scss";

export type Props = {
  isVisible: boolean;
};

const Spinner: React.FC<Props> = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Spinner;
