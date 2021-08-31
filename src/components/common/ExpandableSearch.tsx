import React from "react";
import debounce from 'lodash.debounce';
import styles from "./ExpandableSearch.module.scss";

export type Props = {
  onChange: (val: string) => void;
  placeholder?: string
  value: string | null
};

const ExpandableSearch: React.FC<Props> = ({ value, placeholder, onChange }) => {
  const [localValue, setLocalValue] = React.useState<string>("");
  React.useEffect(() => {
    setLocalValue(value || '');
  }, [value])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalValue(value)
    debounceChange(value)
  }
  const debounceChange = React.useCallback(
    debounce((_searchVal: string) => {
      onChange(_searchVal);
    }, 1000),
    []
  );

  return (
    <form className={styles.container}>
        <input 
          type="search" 
          value={localValue || ''}
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
