import React from "react";
import { ReactComponent as BookmarkImage }  from "../../assets/bookmark_24px.svg";
import styles from "./Bookmark.module.scss";

export type Props = {
  label: string;
  onClick: () => void
};

const Bookmark: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.container}>
        <BookmarkImage className={styles.icon} />
        <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Bookmark;
