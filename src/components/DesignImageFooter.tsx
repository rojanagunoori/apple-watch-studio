import React, { useEffect, useState } from "react";
import styles from "../../styles/DesignImageFooter.module.css";
import "../../public/assets/series_10/cases/jetblack.png"
import { useFilters } from "@/context/FiltersContext";
import Image from "next/image";

//import "../../public/assets/hermes_series_10/band/normal"
//import "../../public/assets/series_10/band/nike-sport/normal"
//import "../../public/assets/watche_SE/band"
//import "../../public/assets/hermes_series_10/cases"
//import "../../public/assets/series_10/cases"
//import "../../public/assets/watche_SE/cases"

const DesignImageFooter = () => {
  const { selectedCollection, options, selectedOptions, activeFilterOptions, } = useFilters();
  const activeSize = selectedOptions.size
  const activeCase = selectedOptions.case
  const activeBand = selectedOptions.band

  //const [setSelectedImage] = useState(null);  // Store the selected image link
  // const [backgroundImage, setBackgroundImage] = useState(null);
  //const [images, setImages] = useState([]);
  const [images, setImages] = useState<string[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const [activeBandImage] = useState(
    selectedCollection === "Apple Watch Series 10"
      ? //"/assets/series_10/band/nike-sport/normal/NT Black Sport Band.jpg"
      "/assets/series_10/band/nike-sport/normal/NT  Black Solo Loop.jpg"
      : selectedCollection === "Apple Watch Hermès Series 10"
        ? //"/assets/hermes_series_10/band/initial_band.jpg"
        "/assets/hermes_series_10/band/normal/ST GoldÉcru Toile H Single Tour.jpg"
        : selectedCollection === "Apple Watch SE"
          ? //"/assets/se/band/initial_band.jpg"
          "/assets/series_10/band/nike-sport/normal/NT  Black Solo Loop.jpg"
          : ""
  );

  const [activeCaseImage] = useState(
    selectedCollection === "Apple Watch Series 10"
      ? //"/assets/series_10/cases/jetblack.png"
      "/assets/series_10/cases/jetblack.png"
      : selectedCollection === "Apple Watch Hermès Series 10"
        ?// "/assets/hermes_series_10/cases/initial_case.jpg"
        "/assets/hermes_series_10/cases/circulaire-beton.png"
        : selectedCollection === "Apple Watch SE"
          ?// "/assets/se/cases/initial_case.jpg"
          "/assets/watche_SE/cases/aluminum-midnight-se.png"
          : ""
  );



  console.log(activeSize, activeCase, activeBand, activeFilterOptions)
  /*const images1 = [
    "/assets/series_10/band/nike-sport/normal/NT  Black Solo Loop.jpg",
    "/assets/series_10/band/nike-sport/normal/NT  Black Solo Loop.jpg",
    "/assets/series_10/band/nike-sport/normal/NT Black Magnetic Link.jpg",
    "/assets/series_10/band/nike-sport/normal/NT Black Sport Band.jpg",
    "/assets/series_10/band/nike-sport/normal/NT Black Unity Braided Solo Loop.jpg",
  ];*/
  /*
    const updateImages = () => {
      let newImages = [];
      let newBackgroundImage = null;
  
      switch (selectedCollection) {
        case "Apple Watch Series 10":
          if (activeFilterOptions === "size") {
            if (activeSize === "42mm") {
              newImages = [
                "/assets/series_10/band/nike-sport/normal/NT  Black Solo Loop.jpg",
                "/assets/series_10/band/nike-sport/normal/NT Black Magnetic Link.jpg",
                // Add images specific to 42mm size
              ];
              newBackgroundImage = "/assets/series_10/cases/jetblack.png"; // Set a background image for this option
            } else if (activeSize === "46mm") {
              newImages = [
                "/assets/series_10/band/nike-sport/normal/NT Black Sport Band.jpg",
                "/assets/series_10/band/nike-sport/normal/NT Black Unity Braided Solo Loop.jpg",
                // Add images specific to 46mm size
              ];
              newBackgroundImage = "/assets/series_10/cases/spacegrey.png"; // Set a background image for this option
            }
          } else if (activeFilterOptions === "case") {
            if (activeCase === "Aluminum") {
              newImages = [
                "/assets/series_10/cases/jetblack.png",
                "/assets/series_10/cases/spacegrey.png",
                // Add images for Aluminum case
              ];
              newBackgroundImage = "/assets/series_10/cases/jetblack.png"; // Background for case
            } else if (activeCase === "Titanium") {
              newImages = [
                "/assets/series_10/cases/titanium.png",
                "/assets/series_10/cases/silver_titanium.png",
                // Add images for Titanium case
              ];
              newBackgroundImage = "/assets/series_10/cases/titanium.png"; // Background for Titanium case
            }
          } else if (activeFilterOptions === "band") {
            if (activeBand === "Nike Sport Loop") {
              newImages = [
                "/assets/series_10/band/nike-sport/normal/NT Black Sport Band.jpg",
                "/assets/series_10/band/nike-sport/normal/NT Black Unity Braided Solo Loop.jpg",
                // Add images for Nike Sport Loop
              ];
              newBackgroundImage = "/assets/series_10/bands/nike-sport/selected/NT Black Sport Band.png"; // Band selection
            } else if (activeBand === "Stainless Steel") {
              newImages = [
                "/assets/series_10/band/stainless-steel/black_magnetic_link.jpg",
                "/assets/series_10/band/stainless-steel/white_magnetic_link.jpg",
                // Add images for Stainless Steel band
              ];
              newBackgroundImage = "/assets/series_10/bands/stainless-steel/black_magnetic_link.png"; // Background for Stainless Steel
            }
          }
          break;
        // Add other cases for different collections if needed
        default:
          newImages = [];
          newBackgroundImage = null;
          break;
      }
  
      setImages(newImages);
      setBackgroundImage(newBackgroundImage);
    };
    
      // Update the images whenever the selected options change
      useEffect(() => {
        updateImages();
      }, [selectedCollection, selectedOptions, activeFilterOptions]);
  */

  



  useEffect(() => {
    const updateImages = () => {
      let apiPath = '';
      //  let initialBackgroundImage = '';
      const defaultApiPath = '/api/hermes-band-images';
  
      if (selectedCollection === "Apple Watch Series 10") {
        if (activeFilterOptions === "case") {
          console.log("clicked case")
          apiPath = '/api/hermes-cases-images';
          if (activeCase === "Aluminum") {
            apiPath = '/api/hermes-cases-images';
            // initialBackgroundImage = "/assets/series_10/cases/jetblack.png";
          } else if (activeCase === "Titanium") {
            apiPath = '/api/hermes-cases-images';
            //  initialBackgroundImage = "/assets/series_10/cases/titanium.png";
          }
        } else if (activeFilterOptions === "band") {
          console.log("clicked band")
          apiPath = '/api/hermes-band-images';
          if (activeCase === "Aluminum") {
            apiPath = '/api/hermes-band-images';
            // initialBackgroundImage = "/assets/series_10/cases/jetblack.png";
          } else if (activeCase === "Titanium") {
            apiPath = '/api/hermes-band-images';
            // initialBackgroundImage = "/assets/series_10/cases/titanium.png";
          }
        }
      }
      else if (selectedCollection === "Apple Watch Hermès Series 10") {
        if (activeCase === "Titanium") {
          apiPath = '/api/hermes-cases-images';
          //  initialBackgroundImage = "/assets/series_10/cases/titanium.png";
        }
      }
      else if (selectedCollection === "Apple Watch SE") { }
      if (activeCase === "Aluminum") {
        apiPath = '/api/hermes-cases-images';
        // initialBackgroundImage = "/assets/series_10/cases/jetblack.png";
      }
  
      if (apiPath) {
        fetchImages(apiPath).then((fetchedImages) => {
          setImages(fetchedImages);
          // setBackgroundImage(initialBackgroundImage);
          if (fetchedImages && fetchedImages.length > 0) {
            setBackgroundImage(fetchedImages[0]);
          } else {
  
            fetchImages(defaultApiPath).then((defaultImages) => {
              if (defaultImages && defaultImages.length > 0) {
                setBackgroundImage(defaultImages[0]);
              } else {
                setBackgroundImage(null);
              }
            });
          }
        });
      }
  
    }
    updateImages();
  }, [selectedCollection, selectedOptions, activeFilterOptions,activeCase]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  /*
  const handleSelect = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };
  */
  const handleSelect = (index: number) => {
    if (images && images[index]) {
      setCurrentIndex(index);
  //    setSelectedImage(images[index]);
    }
  };
  
  


  const fetchImages = async (path: string) => {
    const response = await fetch(path);
    const data = await response.json();
    return data.images;
  };

  /*
    useEffect(() => {
      const getImages = async () => {
        const data = await fetchImages("/api/hermes-band-images");
        setImages(data);  // Set the images in state
      };
    
      getImages();
    }, []);
    
  */

  useEffect(() => {

    const fetchImages = async () => {
      //  const res = await fetch('/api/hermes-band-images');
      // // const res = await fetch('/api/images');  

      // const data = await res.json();
      // setImages(data.images);  // Set the fetched image paths
    };

    fetchImages();
  }, [selectedCollection, selectedOptions, activeFilterOptions]);

  console.log(images, backgroundImage, options)

  return (
    <div className={styles.carouselWrapper}>
      {/* Carousel Controls */}
      <button className={`${styles.carouselButton} ${styles.prev}`} onClick={handlePrev}>
        &#8249;
      </button>

      {/* Horizontal Carousel */}

      {activeFilterOptions === "size" && (
        <>
          <div className={styles.carousel}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${(currentIndex - 2) * 150}px)`,
              }}
            >
              {options.size.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.carouselItem} ${index === currentIndex ? styles.selected : ""
                    }`}
                  onClick={() => handleSelect(index)}
                >
                  <div className={styles.imageContainer}>
                    {/* Render the image */}
                    <Image  objectFit="contain"
                      src={activeBandImage}
                      alt={`Band ${index + 1}`}
                      className={styles.img}
                    />
                    {index === currentIndex && (
                      // Render the selected image with dynamic size adjustment
                      <Image  objectFit="contain"
                        className={`${styles.selectedImage}`}
                        src={activeCaseImage}
                        alt={`Selected Band ${index + 1}`}
                        style={{
                          width: `${parseInt(selectedOptions.size ?? "0") * 5}px`, // Fallback to "0" if size is null
                          height: `${parseInt(selectedOptions.size ?? "0") * 5}px`, // Fallback to "0" if size is null
                          objectFit: "contain",
                        }}
                        
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeFilterOptions == "case" && <>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${(currentIndex - 2) * 150}px)`,

            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${index === currentIndex ? styles.selected : ""
                  }`}
                onClick={() => handleSelect(index)}
              >
                <div className={styles.imageContainer}>

                  <Image  objectFit="contain" src={image} alt={`Band ${index + 1}`} className={`${styles.img} `} />
                  {index === currentIndex && (
                    <Image  objectFit="contain"
                      className={`${styles.selectedImage} ${styles.selectedImageCase}`}
                      src={activeBandImage}
                      // src="/assets/series_10/cases/jetblack.png"//{image}
                      alt={`Selected Band ${index + 1}`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div></>}

      {activeFilterOptions == "band" && <>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${(currentIndex - 2) * 150}px)`, // Center the active image
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${index === currentIndex ? styles.selected : ""
                  }`}
                onClick={() => handleSelect(index)}
              >
                <div className={styles.imageContainer}>
                  <Image  objectFit="contain" src={image} alt={`Band ${index + 1}`} className={styles.img} />
                  {index === currentIndex && (
                    <Image  objectFit="contain"
                      className={`${styles.selectedImage} ${styles.selectedImageBand}`}
                      src={activeCaseImage}
                      //  src="/assets/series_10/cases/jetblack.png"//{image}
                      alt={`Selected Band ${index + 1}`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div></>}

      <button className={`${styles.carouselButton} ${styles.next}`} onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default DesignImageFooter;
