import React from "react";
import styles from "./ExpandableSearch.module.scss";

export type Props = {
  onChange: (val: string) => void;
  placeholder?: string
};

const ExpandableSearch: React.FC<Props> = ({ placeholder, onChange }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    
    onChange(value);
  }
  return (
    <form className={styles.container}>
        <input 
          type="search" 
          onChange={handleOnChange}
          placeholder={placeholder}
        />
    </form>
  );
};

ExpandableSearch.defaultProps = {
  placeholder: 'Search all news'
}

export default ExpandableSearch;
