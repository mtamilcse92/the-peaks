import React, { ReactNode } from "react";
import styles from "./Wrapper.module.scss";

export type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Wrapper;
