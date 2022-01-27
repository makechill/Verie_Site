import React, { useState } from "react";
import { ImageSliders } from "../../Assets/ImageSliders/ImageSliders";
import "./FirstImageSlider.css";

const Firstimageslider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = ImageSliders.length;

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  return (
    <>
      <div className="slider_image_main_container">
        <i class="fas fa-chevron-left left_arrow" onClick={prevImage}></i>
        <i class="fas fa-chevron-right right_arrow" onClick={nextImage}></i>
        <div className="slider_image_container">
          {ImageSliders.map((image, index) => {
            return (
              <div
                className={index === currentImage ? "slide active" : "slide"}
                key={index}
              >
                <img
                  className="slider_images"
                  key={index}
                  src={image.img}
                  alt={image.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Firstimageslider;
