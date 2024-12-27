
'use client';
import Image from "next/image";
import styles from "../styles/FrontWatchSetUp.module.css";

// Define the prop types
interface FrontWatchSetUpProps {
  watchbandUrl: string;
  watchcaseUrl: string;
}

export default function FrontWatchSetUp({ watchbandUrl, watchcaseUrl }: FrontWatchSetUpProps) {
  return (
    <div className={styles.watchSetupWrapper}>
        <Image objectFit="contain" src={watchcaseUrl} alt="Watch Case" className="top-image" />
        <Image objectFit="contain" src={watchbandUrl} alt="Watch Band" className="bottom-image"/>
    </div>
  );
}


/*'use client';
import Image from "next/image";
import styles from "../styles/FrontWatchSetUp.module.css";



export default function FrontWatchSetUp({ watchbandUrl, watchcaseUrl }) {
    return (
      <div className={styles.watchSetupWrapper}>
          <Image  objectFit="contain" src={watchcaseUrl} alt="Watch Case" className="top-image" />
          <Image  objectFit="contain" src={watchbandUrl} alt="Watch Band" className="bottom-image"/>
      
      </div>
    );
  }
  */