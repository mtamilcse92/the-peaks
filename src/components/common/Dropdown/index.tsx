import React from "react";
import CX from "classnames";
import { ReactComponent as DownImage }  from "../../../assets/arrow_drop_down_24px.svg";
import { ReactComponent as UpImage }  from "../../../assets/arrow_drop_down_up_24px.svg";
import { contentSort } from '../../../constants/index'
import styles from "./styles.module.scss"
const { useState } = React;

interface IItem {
  id: number | string
  label: string
  value: string
}

export type Props = {
    items?: IItem [];
    selected?: IItem
    onSelect: (item: IItem) => void
  };
  
const Dropdown: React.FC<Props> = ({ onSelect, selected, items = contentSort }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | number | null>(selected?.id || null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (e: any): void => {
    setSelectedItem(Number(e.target.id))
    setOpen(false)
    const selectedValue = items.find(({ id }) => id === Number(e.target.id))
    
    if (selectedValue) {
      onSelect(selectedValue)
    }
  }
  
  return (
    <div className={CX(styles.dropdown, {[styles.open]: isOpen })}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {items.find(item => item.id === selectedItem)?.label || "Select your destination"}
        {isOpen ? <UpImage/> : <DownImage />}
      </div>
      <div className={CX(styles.dropdownBody, {[styles.open]: isOpen })}>
        {items.map(item => (
          <div key={item.id} className={CX(styles.dropdownItem, {[styles.selected]: item.id === selectedItem })} data-item={item} onClick={handleItemClick} id={`${item.id}`}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;