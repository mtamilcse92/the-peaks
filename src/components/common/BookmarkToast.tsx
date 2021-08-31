import React from "react";
import CX from "classnames";
import { ReactComponent as BookmarkFilledImage } from "../../assets/bookmark_24px.svg";
import { ReactComponent as BookmarkUnFilledImage } from "../../assets/bookmark_border_24px.svg";
import styles from "./BookmarkToast.module.scss";

export type Props = {
  isVisible: boolean
  onClose: () => void
  classNames?: string
  type: "succuss" | "error" | "warning";
  label: string;
};

const BookmarkToast: React.FC<Props> = ({
  isVisible,
  classNames,
  type,
  onClose,
  label,
}) => {
  const isSuccess = type === "succuss";
  const [showToast, setShowToast] = React.useState<boolean>(isVisible);

  React.useEffect(() => {
    setShowToast(isVisible)
    setTimeout(() => {
    setShowToast(false);
    onClose();
    }, 1000);
  }, [isVisible, onClose]);

  if (!showToast) {
    return null;
  }

  return (
    <div className={CX(styles.container, styles[type], classNames)}>
      {isSuccess && <BookmarkFilledImage className={styles.icon} />}
      {!isSuccess && <BookmarkUnFilledImage className={styles.icon} />}
      <span className={styles.label}>{label}</span>
    </div>
  );
};

BookmarkToast.defaultProps = {
  type: "succuss",
};

export default BookmarkToast;
