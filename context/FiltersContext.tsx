
"use client";

import React, { createContext, useContext, useState } from 'react';

interface OptionsType {
  size: { value: string; selected: boolean }[];
  case: { value: string; selected: boolean }[];
  band: { value: string; selected: boolean }[];
}


/*
interface OptionsType {
  size: string[];
  case: string[];
  band: string[];
}
*/

interface SelectedOptionsType {
  size: string | null;
  case: string | null;
  band: string | null;
}


interface FiltersContextType {
  selectedCollection: string;
  setSelectedCollection: React.Dispatch<React.SetStateAction<string>>;
  options: OptionsType;
  updateOptions: (collection: string) => void;
  handleFilterClick: (filter: string | null) => void;
  activeFilter: string | null;
  updateOption: (filterType: keyof OptionsType, selectedOption: string) => void; // Updated type
  selectedOptions: SelectedOptionsType;
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptionsType>>;
  activeFilterOptions: string | null;
  setActiveFilterOptions: React.Dispatch<React.SetStateAction<string | null>>;
}


/*
interface FiltersContextType {
  selectedCollection: string;
  setSelectedCollection: React.Dispatch<React.SetStateAction<string>>;
  options: OptionsType;
  updateOptions: (collection: string) => void;
  handleFilterClick: (filter: string | null) => void;
  activeFilter: string | null;
  updateOption: (filterType: string, selectedOption: string) => void;
  selectedOptions: SelectedOptionsType;
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptionsType>>;
  activeFilterOptions: string | null;
  setActiveFilterOptions: React.Dispatch<React.SetStateAction<string | null>>;
}
*/

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCollection, setSelectedCollection] = useState('Apple Watch Series 10');
  const [options, setOptions] = useState<OptionsType>({
    size: [],
    case: [],
    band: [],
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({
    size: null,
    case: null,
    band: null,
  });

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeFilterOptions, setActiveFilterOptions] = useState<string | null>(null);


  const updateOptions = (collection: string) => {
    let newOptions: OptionsType;
    switch (collection) {
      case 'Apple Watch Series 10':
        newOptions = {
          size: [
            { value: '42mm', selected: false },
            { value: '46mm', selected: false },
          ],
          case: [
            { value: 'Aluminum', selected: false },
            { value: 'Titanium', selected: false },
          ],
          band: [
            { value: 'Stainless Steel', selected: false },
            { value: 'Sport Loop', selected: false },
            { value: 'Sport Band', selected: false },
            { value: 'FineWoven', selected: false },
            { value: 'Braided Solo Loop', selected: false },
            { value: 'Solo Loop', selected: false },
            { value: 'Nike Sport Loop', selected: false },
            { value: 'Nike Sport Band', selected: false },
          ],
        };
        break;
      case 'Apple Watch Hermès Series 10':
        newOptions = {
          size: [
            { value: '42mm', selected: false },
            { value: '46mm', selected: false },
          ],
          case: [
            { value: 'Titanium', selected: false },
          ],
          band: [
            { value: 'Hermès Toile H', selected: false },
            { value: 'Hermès Torsade', selected: false },
            { value: 'Hermès Kilim', selected: false },
            { value: 'Hermès Grand H', selected: false },
          ],
        };
        break;
      case 'Apple Watch SE':
        newOptions = {
          size: [
            { value: '40mm', selected: false },
            { value: '44mm', selected: false },
          ],
          case: [
            { value: 'Aluminum', selected: false },
          ],
          band: [
            { value: 'Stainless Steel', selected: false },
            { value: 'Sport Loop', selected: false },
            { value: 'Sport Band', selected: false },
            { value: 'FineWoven', selected: false },
            { value: 'Braided Solo Loop', selected: false },
            { value: 'Solo Loop', selected: false },
            { value: 'Nike Sport Loop', selected: false },
            { value: 'Nike Sport Band', selected: false },
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
      size: newOptions.size[0]?.value || null,
      case: newOptions.case[0]?.value || null,
      band: newOptions.band[0]?.value || null,
    });
    setSelectedCollection(collection);
  };
  

  /*
  const updateOptions = (collection: string) => {
    let newOptions: OptionsType;
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
  */

  const handleFilterClick = (filter: string | null) => {
    setActiveFilter(filter);
  };

  const handleFilterClickOptions = (filter: string) => {
    setActiveFilterOptions(activeFilter === filter ? null : filter);
  };

  const updateOption = (filterType: keyof OptionsType, selectedOption: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [filterType]: prevOptions[filterType].map((option) => ({
        ...option,
        selected: option.value === selectedOption,
      })),
    }));
  };
  

  /*

  const updateOption = (filterType: keyof OptionsType, selectedOption: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [filterType]: prevOptions[filterType].map((option) =>
        option === selectedOption
          ? { value: option, selected: true }
          : { value: option, selected: false }
      ),
    }));
  };
  */
  


  /*
  const updateOption = (filterType: string, selectedOption: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [filterType]: prevOptions[filterType].map((option) =>
        option === selectedOption
          ? { value: option, selected: true }
          : { value: option, selected: false }
      ),
    }));
  };
  */
 /*

  const handleOptionSelect = (filter: string, option: string) => {
    updateOption(filter, option);
  };
  */

  const handleOptionSelect = (filter: keyof OptionsType, option: string) => {
    updateOption(filter, option);
  };
  
  

  console.log(activeFilterOptions);

  return (
    <FiltersContext.Provider
  value={{
    selectedCollection,
    setSelectedCollection, // Add this line
    options,
    updateOptions,
    handleFilterClick,
    activeFilter,
    updateOption,
    selectedOptions,
    setSelectedOptions,
    activeFilterOptions,
    setActiveFilterOptions,
  }}
>
  {children}
</FiltersContext.Provider>

    /*
    <FiltersContext.Provider
      value={{
        selectedCollection,
        options,
        updateOptions,
        handleFilterClick,
        activeFilter,
        updateOption,
        selectedOptions,
        setSelectedOptions,
        activeFilterOptions,
        setActiveFilterOptions,
      }}
    >
      {children}
    </FiltersContext.Provider>*/
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};




/*
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

 
  /*const updateOptions = (collection) => {
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
  };end/

  const updateOptions = (collection: string) => {
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
*/