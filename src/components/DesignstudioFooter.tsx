import React, { useEffect, useState } from "react";
import styles from "../../styles/DesignstudioFooter.module.css";
import { useFilters } from "@/context/FiltersContext";


const DesignstudioFooter = () => {
  const { selectedCollection, options, updateOptions,selectedOptions, setSelectedOptions ,activeFilterOptions, setActiveFilterOptions} = useFilters();
  const [activeFilter, setActiveFilter] = useState(null);

  const [selectedOptions1, setSelectedOptions1] = useState({
    size:  options?.size[0],//"42mm", 
    case: options?.case[0],//"standard", 
    band: options?.band[0]//"sport", 
  });
  console.log(activeFilterOptions)

  useEffect(() => {
    // Ensure options and selectedOptions are in sync when the component loads or when collection changes
    if (options.size.length > 0 && options.case.length > 0 && options.band.length > 0) {
      setSelectedOptions({
        size: selectedOptions.size || options.size[0],
        case: selectedOptions.case || options.case[0],
        band: selectedOptions.band || options.band[0],
      });
    }
  }, [options]);

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleFilterClickOptins = (filter) => {
    setActiveFilterOptions(activeFilterOptions === filter ? null : filter);
  };
 

  const handleOptionSelect = (filter, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [filter]: option,
    });
  };

  // Assuming options contains the filter options dynamically
  const sizeOptions = options?.size || ["42mm", "38mm"];
  const caseOptions = options?.case || ["standard", "premium"];
  const bandOptions = options?.band || ["sport", "leather"];

  return (
    <div className={styles.rfDesignstudioFooter}>
      <div className={styles.rfDesignstudioFilters}>

        {/* Size Button */}
        <div className={styles.rfDesignstudioFilterList}>
          <div
            className={`${styles.button} ${styles.rfDesignstudioFilter} ${
              activeFilterOptions === "size" ? styles.rfDesignstudioFilterExpanded : ""
            }`}
            onClick={() => handleFilterClickOptins("size")}
          >
            <button className={styles.rfDesignstudioFilterHeader} type="button">
              <svg height="25" viewBox="0 0 19 25" width="19" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h19v25h-19z" fill="none"></path>
                <path d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z" fill="#1d1d1f"></path>
              </svg>
              Size
            </button>
          </div>
          {activeFilterOptions === "size" && (
            <div className={styles.rfDesignstudioFilterdim}>
              <ul className={styles.rfDesignstudioFilterdimOptions}>
                {sizeOptions.map((size) => (
                  <li
                    key={size}
                    onClick={() => handleOptionSelect("size", size)}
                    className={selectedOptions.size === size ? styles.selected : ""}
                  >
                    <span>{size}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Case Button */}
        <div className={styles.rfDesignstudioFilterList}>
          <div
            className={`${styles.button} ${styles.rfDesignstudioFilter} ${
              activeFilterOptions === "case" ? styles.rfDesignstudioFilterExpanded : ""
            }`}
            onClick={() => handleFilterClickOptins("case")}
          >
            <button className={styles.rfDesignstudioFilterHeader} type="button">
              <svg
                height="25"
                viewBox="0 0 17 25"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h17v25h-17z" fill="none"></path>
                <path d="m16 8.2017c-.1665-.1801-.385-.2703-.6553-.2703h-.3447v-.0225c0-2.2253-1.804-4.0293-4.0293-4.0293h-6.9414c-2.2253.0001-4.0293 1.804-4.0293 4.0294v8.9414c0 2.2253 1.804 4.0293 4.0293 4.0293h6.9414c2.2253 0 4.0293-1.804 4.0293-4.0293v-5.1904h.3447c.2703 0 .4888-.0923.6553-.277.1667-.1844.25-.4254.25-.7227v-1.7427c0-.2972-.0833-.5356-.25-.7159zm-2 8.6487c0 1.6704-1.3589 3.0293-3.0293 3.0293h-6.9414c-1.6704 0-3.0293-1.3589-3.0293-3.0293v-8.9414c0-1.6704 1.3589-3.0293 3.0293-3.0293h6.9414c1.6704 0 3.0293 1.3589 3.0293 3.0293z" fill="#1d1d1f"></path>
              </svg>
              Case
            </button>
          </div>
          {activeFilterOptions === "case" && (
            <div className={styles.rfDesignstudioFilterdim}>
              <ul className={styles.rfDesignstudioFilterdimOptions}>
                {caseOptions.map((caseOption) => (
                  <li
                    key={caseOption}
                    onClick={() => handleOptionSelect("case", caseOption)}
                    className={selectedOptions.case === caseOption ? styles.selected : ""}
                  >
                    <span>{caseOption}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Band Button */}
        <div className={styles.rfDesignstudioFilterList}>
          <div
            className={`${styles.button} ${styles.rfDesignstudioFilter} ${
              activeFilterOptions === "band" ? styles.rfDesignstudioFilterExpanded : ""
            }`}
            onClick={() => handleFilterClickOptins("band")}
          >
            <button className={styles.rfDesignstudioFilterHeader} type="button">
              <svg
                height="25"
                viewBox="0 0 10 25"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h10v25h-10z" fill="none"></path>
                <path d="m9.5 22.5a.5.5 0 0 1 -.5.5h-8a.5.5 0 1 1 0-1h.015a.485.485 0 0 0 .485-.485v-6.2216a4.5231 4.5231 0 0 0 1 .9448v5.2768a1.4779 1.4779 0 0 1 -.0813.485h5.1627a1.4758 1.4758 0 0 1 -.0814-.485v-5.2768a4.5209 4.5209 0 0 0 1-.9448v6.2216a.4851.4851 0 0 0 .4851.485h.0149a.5.5 0 0 1 .5.5zm-1.9194-19.5h-5.1621a1.4732 1.4732 0 0 1 -.0813-.485v-5.2768a4.5231 4.5231 0 0 0 -1-.9448v6.2216a.4851.4851 0 0 0 -.485.485h.0149a.5.5 0 1 1 .5.5z" fill="#1d1d1f"></path>
              </svg>
              Band
            </button>
          </div>
          {activeFilterOptions === "band" && (
            <div className={styles.rfDesignstudioFilterdim}>
              <ul className={styles.rfDesignstudioFilterdimOptions}>
                {bandOptions.map((band) => (
                  <li
                    key={band}
                    onClick={() => handleOptionSelect("band", band)}
                    className={selectedOptions.band === band ? styles.selected : ""}
                  >
                    <span>{band}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DesignstudioFooter;
