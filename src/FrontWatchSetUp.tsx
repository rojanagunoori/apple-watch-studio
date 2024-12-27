'use client';
import styles from "../styles/FrontWatchSetUp.module.css";


export default function FrontWatchSetUp({ watchbandUrl, watchcaseUrl }) {
    return (
      <div className={styles.watchSetupWrapper}>
          <img src={watchcaseUrl} alt="Watch Case" className="top-image" />
        <img src={watchbandUrl} alt="Watch Band" className="bottom-image"/>
      
      </div>
    );
  }
  