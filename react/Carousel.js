import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {

    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

  };

  const prevImage = () => {

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  };

  useEffect(() => {

    const interval = setInterval(() => {

      nextImage();

    }, 3000); // Change image every 3 seconds (adjust as needed)

 
    return () => clearInterval(interval); // Cleanup when component unmounts


  }, []);


  return (

    <div className="image-slider">


      {/* <button onClick={prevImage}>Previous</button> */}


      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />

{/*

      <button onClick={nextImage}>Next</button> */}

 

    </div>

 

  );

 

};

 

 

 

export default Carousel;