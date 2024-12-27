'use client';

import React, { useState } from 'react';
import { useFilters } from '../../context/FiltersContext';
import styles from "../../styles/ImageDropdownWrapper.module.css";

const ImageDropdownWrapper = () => {
  const { selectedCollection, updateOptions } = useFilters();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const collections = [
    'Apple Watch Series 10',
    'Apple Watch Hermès Series 10',
    'Apple Watch SE',
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (index:number, item:string) => {
    setActiveIndex(index);
    updateOptions(item);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button
        className={styles.dropdownButton}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <span>{selectedCollection || 'Select Collection'}</span>
        <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <ul className={styles.menuItems}>
            {collections.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => handleItemClick(index, item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageDropdownWrapper;
