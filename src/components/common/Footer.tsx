import React from "react";
import styles from "./Footer.module.scss";

export type Props = {
};

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.container} />
  );
};

export default Footer;
