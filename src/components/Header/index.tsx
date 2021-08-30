import React from "react";
import ExpandableSearch from '../common/ExpandableSearch';
import { ReactComponent as BrandImage }  from "../../assets/brand-icon.svg";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <BrandImage className={styles.brandLogo} />
      <ExpandableSearch onChange={() => {}} />
    </header>
  );
};

export default Header;
