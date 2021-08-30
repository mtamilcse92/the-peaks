import React from "react";
import CX from "classnames";
import styles from "./Dropdown.module.scss"
import { ReactComponent as DownImage }  from "../../assets/arrow_drop_down_24px.svg";
import { ReactComponent as UpImage }  from "../../assets/arrow_drop_down_up_24px.svg";
const { useState } = React;

export type Props = {
    items?: {
        id: number | string
        label: string
    } [];
    onClick?: () => void
  };
  
const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];

const Dropdown: React.FC<Props> = ({ items =data }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | number | null>(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (e: any): void => {
    setSelectedItem(Number(e.target.id))
    setOpen(false)
  }
  
  return (
    <div className={CX(styles.dropdown, {[styles.open]: isOpen })}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {items.find(item => item.id === selectedItem)?.label || "Select your destination"}
        {isOpen ? <UpImage/> : <DownImage />}
      </div>
      <div className={CX(styles.dropdownBody, {[styles.open]: isOpen })}>
        {items.map(item => (
          <div className={CX(styles.dropdownItem, {[styles.selected]: item.id === selectedItem })} onClick={handleItemClick} id={`${item.id}`}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;