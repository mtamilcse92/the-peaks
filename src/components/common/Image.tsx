import React from "react";
import { ReactComponent as BrandImage } from "../../assets/brand-icon.svg";
import styles from "./Image.module.scss";

export type Props = {
  imageURL?: string;
};

export const DefaultImage = () => (
  <div className={styles.defaultImage}>
    <BrandImage className={styles.brandImage} />
  </div>
);

const Image: React.FC<Props> = ({ imageURL }) => {
  if (!imageURL) {
    return <DefaultImage />;
  }
  return <img src={imageURL} alt="Unknown" />;
};

export default Image;
