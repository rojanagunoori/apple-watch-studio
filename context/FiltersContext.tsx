"use client"

import React, { createContext, useContext, useState } from 'react';

interface FiltersContextType {
  selectedCollection: string;
  setSelectedCollection: React.Dispatch<React.SetStateAction<string>>;
}

//const FiltersContext = createContext();
const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: React.ReactNode })=> {
  const [selectedCollection, setSelectedCollection] = useState('Apple Watch Series 10');
  const [options, setOptions] = useState({
    size: [],
    case: [],
    band: [],
  });

  const [selectedOptions, setSelectedOptions] = useState({
    size: null,
    case: null,
    band: null,
  });

  const [activeFilter, setActiveFilter] = useState(null);
   const [activeFilterOptions, setActiveFilterOptions] = useState(null);

 
  const updateOptions = (collection) => {
    let newOptions;
    switch (collection) {
      case 'Apple Watch Series 10':
        newOptions = {
          size: ['42mm', '46mm'],
          case: ['Aluminum', 'Titanium'],
          band: [
            'Stainless Steel',
            'Sport Loop',
            'Sport Band',
            'FineWoven',
            'Braided Solo Loop',
            'Solo Loop',
            'Nike Sport Loop',
            'Nike Sport Band',
          ],
        };
        break;
      case 'Apple Watch Hermès Series 10':
        newOptions = {
          size: ['42mm', '46mm'],
          case: ['Titanium'],
          band: ['Hermès Toile H', 'Hermès Torsade', 'Hermès Kilim', 'Hermès Grand H'],
        };
        break;
      case 'Apple Watch SE':
        newOptions = {
          size: ['40mm', '44mm'],
          case: ['Aluminum'],
          band: [
            'Stainless Steel',
            'Sport Loop',
            'Sport Band',
            'FineWoven',
            'Braided Solo Loop',
            'Solo Loop',
            'Nike Sport Loop',
            'Nike Sport Band',
          ],
        };
        break;
      default:
        newOptions = {
          size: [],
          case: [],
          band: [],
        };
    }

    setOptions(newOptions);
    setSelectedOptions({
      size: newOptions.size[0] || null,
      case: newOptions.case[0] || null,
      band: newOptions.band[0] || null,
    });
    setSelectedCollection(collection);
  };


  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleFilterClickOptins = (filter) => {
    setActiveFilterOptions(activeFilter === filter ? null : filter);
  };

  const updateOption = (filterType, selectedOption) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [filterType]: prevOptions[filterType].map((option) =>
        option === selectedOption
          ? { value: option, selected: true }
          : { value: option, selected: false }
      ),
    }));
  };
  

  const handleOptionSelect = (filter, option) => {
    updateOption(filter, option); 
  };
  
  console.log(activeFilterOptions)

  return (
    <FiltersContext.Provider value={{ selectedCollection, options, updateOptions, handleFilterClick, activeFilter,updateOption ,selectedOptions, setSelectedOptions,activeFilterOptions, setActiveFilterOptions}}>
      {children}
    </FiltersContext.Provider>
  );
};

export const  useFilters = () => useContext(FiltersContext);
