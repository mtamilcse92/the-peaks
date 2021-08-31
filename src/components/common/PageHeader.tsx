import React, { ReactNode } from "react";
import styles from "./PageHeader.module.scss";

export type Props = {
    title: string
    rhsElement?: ReactNode;
};

const PageHeader: React.FC<Props> = ({ title, rhsElement }) => {
  
  return (
    <header className={styles.header}>
        <span className={styles.heading}>{title}</span>
        {rhsElement && <div className={styles.rhs}>
          {rhsElement}
        </div>}
      </header>
  );
};

export default PageHeader;
