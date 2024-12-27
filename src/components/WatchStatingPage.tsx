'use client';

import { useState } from "react";
import styles from "../../styles/WatchStudio.module.css";
import FrontWatchSetUp from "../FrontWatchSetUp";
//import MainFrontWatchSetUp from "../MainFrontWatchSetUp";
import ProductInfo from "./ProductInfo";
import DesignstudioFooter from "./DesignstudioFooter";
import ImageDropdownWrapper from "./ImageDropdownWrapper";
import DesignImageFooter from "./DesignImageFooter"
import Image from "next/image";

export default function WatchStudio() {
  const [getStartedClicked, setGetStartedClicked] = useState(false);

  const watchbandUrl = "/assets/series_10/cases/jetblack.png";
  const watchcaseUrl = "/assets/series_10/band/nike-sport/normal/NT  Black Solo Loop.jpg";

  const handleGetStarted = () => {
    setGetStartedClicked(true);
  };

  return (
    <div className={styles.studioWrapper}>
      <div className={styles.studiologo}>
        <Image  objectFit="contain"
          src="https://logowik.com/content/uploads/images/930_applewatch.jpg"
          alt="Apple Watch Studio Logo"
          className={styles.logoImage}
          width={500} // Adjust the width
  height={500}
         
        />
      </div>

      {!getStartedClicked ? (
        <>
          <div className={styles.greetingWrapper}>
            <h1 className={styles.headline}>
              <span className={styles.topText}>Apple Watch Studio</span>
              <span>Choose a case.</span>
              <span>Pick a band.</span>
              <span>Create your own style.</span>
              <button
                type="button"
                onClick={handleGetStarted}
                className={styles.getStarted}
              >
                Get started
              </button>
            </h1>
          </div>
        
          <div>
            <FrontWatchSetUp
              watchbandUrl={watchbandUrl}
              watchcaseUrl={watchcaseUrl}
            />
          </div>
        </>
      ) : (
        <>
        <ImageDropdownWrapper/>
       
          <div className={styles.imageDropdownWrapper}>
           
          <div > 
            <DesignImageFooter />
            {/* <MainFrontWatchSetUp
              watchbandUrl={watchbandUrl}
              watchcaseUrl={watchcaseUrl}
            />*/}</div>
          </div>

         
          <ProductInfo />
          <DesignstudioFooter/>
        </>
      )}
    </div>
  );
}
