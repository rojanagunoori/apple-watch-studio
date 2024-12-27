'use client';
import Image from "next/image";
import styles from "../styles/FrontWatchSetUp.module.css";



export default function FrontWatchSetUp({ watchbandUrl, watchcaseUrl }) {
    return (
      <div className={styles.watchSetupWrapper}>
          <Image src={watchcaseUrl} alt="Watch Case" className="top-image" />
          <Image src={watchbandUrl} alt="Watch Band" className="bottom-image"/>
      
      </div>
    );
  }
  