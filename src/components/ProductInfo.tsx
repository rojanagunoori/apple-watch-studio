import { useFilters } from "@/context/FiltersContext";
import styles from "../../styles/ProductInfo.module.css";

const priceMapping = {
  "Apple Watch Series 10": {
    Aluminum: {
      "46mm": {
        "Stainless Steel": 479,
        "Sport Loop": 479,
        "Sport Band": 429,
        "FineWoven": 479,
        "Braided Solo Loop": 479,
        "Solo Loop": 429,
        "Nike Sport Loop": 429,
        "Nike Sport Band": 429,
      },
      "42mm": {
        "Stainless Steel": 449,
        "Sport Loop": 449,
        "Sport Band": 399,
        "FineWoven": 449,
        "Braided Solo Loop": 449,
        "Solo Loop": 399,
        "Nike Sport Loop": 399,
        "Nike Sport Band": 399,
      },
    },
    Titanium: {
      "46mm": {
        "Stainless Steel": 799,
        "Sport Loop": 749,
        "Sport Band": 749,
        "FineWoven": 799,
        "Braided Solo Loop": 799,
        "Solo Loop": 749,
        "Nike Sport Loop": 749,
        "Nike Sport Band": 749,
      },
      "42mm": {
        "Stainless Steel": 749,
        "Sport Loop": 699,
        "Sport Band": 699,
        "FineWoven": 749,
        "Braided Solo Loop": 749,
        "Solo Loop": 699,
        "Nike Sport Loop": 699,
        "Nike Sport Band": 699,
      },
    },
  },
  "Apple Watch Hermès Series 10": {
    Titanium: {
      "42mm": {
        "Hermès Toile H": 1249,
        "Hermès Torsade": 1349,
        "Hermès Kilim": 1249,
        "Hermès Grand H": 1899,
      },
      "46mm": {
        "Hermès Toile H": 1299,
        "Hermès Torsade": 1299,
        "Hermès Kilim": 1299,
        "Hermès Grand H": 1949,
      },
    },
  },
  "Apple Watch SE": {
    Aluminum: {
      "44mm": {
        "Stainless Steel": 329,
        "Sport Loop": 279,
        "Sport Band": 279,
        "FineWoven": 329,
        "Braided Solo Loop": 329,
        "Solo Loop": 279,
        "Nike Sport Loop": 279,
        "Nike Sport Band": 279,
      },
      "40mm": {
        "Stainless Steel": 299,
        "Sport Loop": 249,
        "Sport Band": 249,
        "FineWoven": 299,
        "Braided Solo Loop": 299,
        "Solo Loop": 249,
        "Nike Sport Loop": 249,
        "Nike Sport Band": 249,
      },
    },
  },
};


export default function ProductInfo() {
   const { selectedCollection, options, updateOptions,selectedOptions, setSelectedOptions } = useFilters();
   const activeSize =selectedOptions.size //options?.size?.selected || "46mm"; // Ensure you have a selected value for size
  const activeCase = selectedOptions.case//options?.case?.selected || "Aluminum"; // Active case selected
  const activeBand = selectedOptions.band//options?.band?.selected || "Sport Loop"

  console.log(activeSize,activeCase,activeBand)

  let caseName = "Aluminum Case"; // default for Apple Watch SE and Apple Watch Series 10
  if (selectedCollection === "Apple Watch Series 10") {
    caseName = activeCase === "Aluminum" ? "Silver Aluminum Case" : "Natural Titanium Case";
  } else if (selectedCollection === "Apple Watch Hermès Series 10") {
    caseName = activeCase === "Titanium" ? "Silver Titanium Case" : "Aluminum Case";
  }

  // Determine the band name based on collection and selected band
  let bandName = "Sport Loop"; // default for Apple Watch SE and Apple Watch Series 10
  if (selectedCollection === "Apple Watch Series 10") {
    if (activeBand === "Stainless Steel") bandName = "Natural Milanese Loop";
    else if (activeBand === "Sport Loop") bandName = "Ultramarine Sport Loop";
    else if (activeBand === "Sport Band") bandName = "Lake Green Sport Band";
    else if (activeBand === "FineWoven") bandName = "Black Magnetic Link";
    else if (activeBand === "Braided Solo Loop") bandName = "Lake Green Braided Solo Loop";
    else if (activeBand === "Solo Loop") bandName = "Star Fruit Solo Loop";
    else if (activeBand === "Nike Sport Loop") bandName = "Black/Blue Nike Sport Loop";
    else if (activeBand === "Nike Sport Band") bandName = "Volt Splash Nike Sport Band";
  } else if (selectedCollection === "Apple Watch Hermès Series 10") {
    if (activeBand === "Band Hermès Toile H") bandName = "Gold/Écru Toile H Single Tour";
    else if (activeBand === "Hermès Torsade") bandName = "Navy Torsade Single Tour";
    else if (activeBand === "Hermès Kilim") bandName = "Béton Kilim Single Tour";
    else if (activeBand === "Hermès Grand H") bandName = "Satiné Grand H";
  } else if (selectedCollection === "Apple Watch SE") {
    if (activeBand === "Stainless Steel") bandName = "Natural Milanese Loop";
    else if (activeBand === "Sport Loop") bandName = "Ultramarine Sport Loop";
    else if (activeBand === "Sport Band") bandName = "Lake Green Sport Band";
    else if (activeBand === "FineWoven") bandName = "Black Magnetic Link";
    else if (activeBand === "Braided Solo Loop") bandName = "Lake Green Braided Solo Loop";
    else if (activeBand === "Solo Loop") bandName = "Star Fruit Solo Loop";
    else if (activeBand === "Nike Sport Loop") bandName = "Black/Blue Nike Sport Loop";
    else if (activeBand === "Nike Sport Band") bandName = "Volt Splash Nike Sport Band";
  }

  const price =
    priceMapping[selectedCollection]?.[activeCase]?.[activeSize]?.[activeBand] || "N/A";


  return (
    <div className={styles.productInfo}>
      <button
        className={styles.sideViewBtn}
        aria-label="Switch to side view"
        type="button"
      >
        Side view
      </button>
      <div className={styles.productDetails}>
        <div className={styles.productCollection}>{selectedCollection}{/*APPLE WATCH SERIES 10*/}</div>
        <div className={styles.productTitle}>
        {activeSize} {caseName} with {bandName}
         {/* 46mm Jet Black Aluminum Case with Black Solo Loop*/}
        </div>
        <div className={styles.productPrice}>
          <div className={styles.fullPrice}>
            From <span className={styles.price}>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
