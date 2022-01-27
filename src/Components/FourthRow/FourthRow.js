import React from "react";
import "./FourthRow.css";
import { FourthRowImages } from "./FourthRowImages";

const Fourthrow = () => {
  return (
    <>
      <div className="fourth_row_main_container">
        <div className="fourth_row_container">
          <div className="arrivals_container">
            <h1 className="arrivals">New Arrivals</h1>
          </div>
          <div className="card_image_container">
            {FourthRowImages.map((image) => {
              return (
                <div>
                  <img
                    src={image.img}
                    alt={image.alt}
                    className="card_images"
                  />
                  <p className="category">Category</p>
                  <p className="product_name">Product Name</p>
                  <p className="price">CA $488</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sunglass_main_container">
          <div className="sunglass_container">
            <div className="sunglass_text_container">
              <h1 className="sunglass_text">Shop Sunglasses</h1>
            </div>
            <div className="sunglass_image_container">
              <h1 className="sunglass_image_text">Let the sun shine.</h1>
            </div>
          </div>
        </div>
        <div className="border_main_container">
          <div className="border_container"></div>
        </div>
      </div>
    </>
  );
};

export default Fourthrow;
