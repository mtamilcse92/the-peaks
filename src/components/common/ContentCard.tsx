import React from "react";
import Image from "./Image";
import styles from "./ContentCard.module.scss";

export type Props = {
  imageUrl?: string;
  showImage?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
};

const ContentCard: React.FC<Props> = ({
  showImage,
  imageUrl,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={styles.container}>
      {showImage && (
        <div className={styles.imageContainer}>
          <Image imageURL={imageUrl} />
        </div>
      )}
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          {title && <span className={styles.title}>{title}</span>}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </div>
      </div>
    </div>
  );
};

ContentCard.defaultProps = {
  showImage: true,
};

export default ContentCard;
