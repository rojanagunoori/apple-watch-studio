import Image from "next/image";
import React from "react";

interface CombinedImagesProps {
  selectedImage: string; // Explicitly define the type as string
}

const CombinedImages: React.FC<CombinedImagesProps> = ({ selectedImage }) => {
  const otherImage = "https://via.placeholder.com/150?text=Other+Image"; // Replace with your other image

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <Image objectFit="contain" src={selectedImage} alt="Selected Image" style={styles.selectedImage} />
        <Image objectFit="contain" src={otherImage} alt="Other Image" style={styles.otherImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  imageContainer: {
    position: "relative" as const, // Use 'as const' here
    width: "300px",
    height: "300px",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const, // Use 'as const' here
  },
  otherImage: {
    position: "absolute" as const, // Use 'as const' here
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover" as const, // Use 'as const' here
    opacity: 0.5, // Adjust opacity to blend the images
  },
};

export default CombinedImages;


/*
import Image from "next/image";
import React from "react";


const CombinedImages = ({ selectedImage }) => {
  const otherImage = "https://via.placeholder.com/150?text=Other+Image"; // Replace with your other image

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <Image  objectFit="contain"  objectFit="contain" src={selectedImage} alt="Selected Image" style={styles.selectedImage} />
        <Image  objectFit="contain" src={otherImage} alt="Other Image" style={styles.otherImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  imageContainer: {
    position: "relative",
    width: "300px",
    height: "300px",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  otherImage: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.5,  // Adjust opacity to blend the images
  },
};

export default CombinedImages;
*/