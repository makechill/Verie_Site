import React, { useState } from "react";
import { ImageSliders } from "../../Assets/ImageSliders/ImageSliders";
import "./SixthRow.css";
import "../FirstImageSlider/FirstImageSlider.css";

const SixthRow = () => {
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
      <div className="sixth_row_main_container">
        <div className="sixth_row_container">
          <div className="editorial_container">
            <h1 className="editorial">Editorial</h1>
          </div>
          <div className="dress_style_links_container">
            <a href="#" className="dress_style_links">
              Fashion
            </a>
            <a href="#" className="dress_style_links">
              Beauty
            </a>
            <a href="#" className="dress_style_links">
              Wellness
            </a>
            <a href="#" className="dress_style_links">
              Lifestyle
            </a>
          </div>
          <div className="editorial_card_image_container">
            <div className="slider_image_main_container">
              <i class="fas fa-chevron-left left_arrow" onClick={prevImage}></i>
              <i
                class="fas fa-chevron-right right_arrow"
                onClick={nextImage}
              ></i>
              <div className="slider_image_container">
                {ImageSliders.map((image, index) => {
                  return (
                    <div
                      className={
                        index === currentImage ? "slide active" : "slide"
                      }
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
          </div>
        </div>
        <div className="founder_main_container">
          <div className="founder_container">
            <div className="founder_image_container">
              <h1 className="founder_image_text">Herstory in the making.</h1>
            </div>
            <div className="founder_text_container">
              <h1 className="founder_text">Meet The Founder</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixthRow;
