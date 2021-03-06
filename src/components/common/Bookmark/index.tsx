import React from "react";
import { ReactComponent as BookmarkImage }  from "../../../assets/bookmark_24px.svg";
import styles from "./styles.module.scss";

export type Props = {
  label: string;
  onClick: () => void
};

const Bookmark: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
        <BookmarkImage className={styles.icon} />
        <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Bookmark;
