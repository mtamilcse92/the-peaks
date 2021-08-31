import React from "react";
import { useHistory } from "react-router-dom";
import { paths } from '../../constants/router';
import ExpandableSearch from '../common/ExpandableSearch';
import { ReactComponent as BrandImage }  from "../../assets/brand-icon.svg";
import { PersistContext } from '../../context/persistContext';
import styles from "./styles.module.scss";

const Header = () => {
  const history = useHistory();
  const {state: persistState, actions} = React.useContext(PersistContext)
  const {setState} = actions
  console.log(actions);
  

  return (
    <header className={styles.container}>
      <BrandImage onClick={() => history.push(paths.root)} className={styles.brandLogo} />
      <ExpandableSearch value={persistState.searchText} onChange={(value) => setState('searchText', value)} />
    </header>
  );
};

export default Header;
