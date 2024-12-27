import { useFilters } from "@/context/FiltersContext";
import styles from "../../styles/ProductInfo.module.css";


type Collection = "Apple Watch Series 10" | "Apple Watch Hermès Series 10";
type Case = "Aluminum" | "Titanium" | "Stainless Steel"; // Add other cases if needed
type Size = "40mm" | "42mm" | "44mm" | "46mm"; // Add other sizes if needed
type Band = "Stainless Steel" | "Sport Loop" | "Sport Band" | "FineWoven" | "Braided Solo Loop" | "Solo Loop" | "Nike Sport Loop" | "Nike Sport Band" | "Hermès Toile H" | "Hermès Torsade" | "Hermès Kilim" | "Hermès Grand H"; // Add other bands if needed

interface PriceMapping {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        [key: string]: number;
      };
    };
  };
}

const priceMapping: PriceMapping = {
  "Apple Watch Series 10": {
    Aluminum: {
      "40mm": {
        "Stainless Steel": 479,
        "Sport Loop": 479,
        // More data...
      },
      "42mm": {
        "Stainless Steel": 499,
        "Sport Loop": 499,
        // More data...
      },
      // More sizes...
    },
    // More cases...
  },
  "Apple Watch Hermès Series 10": {
    Titanium: {
      "40mm": {
        "Hermès Toile H": 1249,
        "Hermès Torsade": 1349,
        // More data...
      },
      // More sizes...
    },
    // More cases...
  },
  // More collections...
};





/*
const priceMapping: PriceMapping = {
  "Apple Watch Series 10": {
    Aluminum: {
      "40mm": {
        "Stainless Steel": 479,
        "Sport Loop": 479,
        "Sport Band": 429,
        "FineWoven": 499,
        "Braided Solo Loop": 469,
        "Solo Loop": 459,
        "Nike Sport Loop": 499,
        "Nike Sport Band": 479,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "42mm": {
        "Stainless Steel": 479,
        "Sport Loop": 479,
        "Sport Band": 429,
        "FineWoven": 499,
        "Braided Solo Loop": 469,
        "Solo Loop": 459,
        "Nike Sport Loop": 499,
        "Nike Sport Band": 479,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "44mm": {
        "Stainless Steel": 499,
        "Sport Loop": 499,
        "Sport Band": 459,
        "FineWoven": 529,
        "Braided Solo Loop": 499,
        "Solo Loop": 489,
        "Nike Sport Loop": 529,
        "Nike Sport Band": 499,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "46mm": {
        "Stainless Steel": 499,
        "Sport Loop": 499,
        "Sport Band": 459,
        "FineWoven": 529,
        "Braided Solo Loop": 499,
        "Solo Loop": 489,
        "Nike Sport Loop": 529,
        "Nike Sport Band": 499,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
    },
    Titanium: {
      "40mm": {
        "Stainless Steel": 599,
        "Sport Loop": 599,
        "Sport Band": 559,
        "FineWoven": 629,
        "Braided Solo Loop": 599,
        "Solo Loop": 589,
        "Nike Sport Loop": 629,
        "Nike Sport Band": 599,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "42mm": {
        "Stainless Steel": 599,
        "Sport Loop": 599,
        "Sport Band": 559,
        "FineWoven": 629,
        "Braided Solo Loop": 599,
        "Solo Loop": 589,
        "Nike Sport Loop": 629,
        "Nike Sport Band": 599,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "44mm": {
        "Stainless Steel": 619,
        "Sport Loop": 619,
        "Sport Band": 579,
        "FineWoven": 649,
        "Braided Solo Loop": 619,
        "Solo Loop": 609,
        "Nike Sport Loop": 649,
        "Nike Sport Band": 619,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "46mm": {
        "Stainless Steel": 619,
        "Sport Loop": 619,
        "Sport Band": 579,
        "FineWoven": 649,
        "Braided Solo Loop": 619,
        "Solo Loop": 609,
        "Nike Sport Loop": 649,
        "Nike Sport Band": 619,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
    },
  },
  "Apple Watch Hermès Series 10": {
    Titanium: {
      "40mm": {
        "Hermès Toile H": 1249,
        "Hermès Torsade": 1299,
        "Hermès Kilim": 1399,
        "Hermès Grand H": 1499,
        "Stainless Steel": 0,
        "Sport Loop": 0,
        "Sport Band": 0,
        "FineWoven": 0,
        "Braided Solo Loop": 0,
        "Solo Loop": 0,
        "Nike Sport Loop": 0,
        "Nike Sport Band": 0,
      },
      "42mm": {
        "Hermès Toile H": 1249,
        "Hermès Torsade": 1299,
        "Hermès Kilim": 1399,
        "Hermès Grand H": 1499,
        "Stainless Steel": 0,
        "Sport Loop": 0,
        "Sport Band": 0,
        "FineWoven": 0,
        "Braided Solo Loop": 0,
        "Solo Loop": 0,
        "Nike Sport Loop": 0,
        "Nike Sport Band": 0,
      },
      "44mm": {
        "Hermès Toile H": 1249,
        "Hermès Torsade": 1299,
        "Hermès Kilim": 1399,
        "Hermès Grand H": 1499,
        "Stainless Steel": 0,
        "Sport Loop": 0,
        "Sport Band": 0,
        "FineWoven": 0,
        "Braided Solo Loop": 0,
        "Solo Loop": 0,
        "Nike Sport Loop": 0,
        "Nike Sport Band": 0,
      },
      "46mm": {
        "Hermès Toile H": 1249,
        "Hermès Torsade": 1299,
        "Hermès Kilim": 1399,
        "Hermès Grand H": 1499,
        "Stainless Steel": 0,
        "Sport Loop": 0,
        "Sport Band": 0,
        "FineWoven": 0,
        "Braided Solo Loop": 0,
        "Solo Loop": 0,
        "Nike Sport Loop": 0,
        "Nike Sport Band": 0,
      },
    },
  },
  "Apple Watch SE": {
    Aluminum: {
      "40mm": {
        "Stainless Steel": 249,
        "Sport Loop": 229,
        "Sport Band": 219,
        "FineWoven": 269,
        "Braided Solo Loop": 249,
        "Solo Loop": 239,
        "Nike Sport Loop": 269,
        "Nike Sport Band": 249,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
      "44mm": {
        "Stainless Steel": 269,
        "Sport Loop": 249,
        "Sport Band": 239,
        "FineWoven": 289,
        "Braided Solo Loop": 269,
        "Solo Loop": 259,
        "Nike Sport Loop": 289,
        "Nike Sport Band": 269,
        "Hermès Toile H": 0,
        "Hermès Torsade": 0,
        "Hermès Kilim": 0,
        "Hermès Grand H": 0,
      },
    },
  },
};

*/

export default function ProductInfo() {
  const { selectedCollection, selectedOptions } = useFilters();

  const activeSize = (selectedOptions.size || "46mm"); // Ensure you have a selected value for size
  const activeCase = (selectedOptions.case || "Aluminum") ; // Active case selected
  const activeBand = (selectedOptions.band || "Sport Loop"); // Active band selected
  
  console.log(activeSize, activeCase, activeBand);

  let caseName = "Aluminum Case"; // default for Apple Watch SE and Apple Watch Series 10
  if (selectedCollection === "Apple Watch Series 10") {
    caseName = activeCase === "Aluminum" ? "Silver Aluminum Case" : "Natural Titanium Case";
  } else if (selectedCollection === "Apple Watch Hermès Series 10") {
    caseName = activeCase === "Titanium" ? "Silver Titanium Case" : "Aluminum Case";
  }

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
    if (activeBand === "Hermès Toile H") bandName = "Gold/Écru Toile H Single Tour";
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

  const price: number | "N/A" =
  priceMapping[selectedCollection as Collection]?.[activeCase as Case]?.[activeSize as Size]?.[activeBand as Band] || "N/A";


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
        <div className={styles.productCollection}>{selectedCollection}</div>
        <div className={styles.productTitle}>
          {activeSize} {caseName} with {bandName}
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







/*
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
   const { selectedCollection, selectedOptions,  } = useFilters();
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
        <div className={styles.productCollection}>{selectedCollection}</div>
        <div className={styles.productTitle}>
        {activeSize} {caseName} with {bandName}
        
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
*/