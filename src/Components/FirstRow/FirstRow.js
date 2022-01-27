import React from "react";
import "./FirstRow.css";

const Firstrow = () => {
  return (
    <>
      <div className="first_row_container">
        <div className="bg_image_container">
          <h1 className="image_text">Resort to Luxury</h1>
        </div>
        <div className="overlap_one_container">
          <h1 className="overlap_one">
            The collection you’ll never need a vacation from
          </h1>
        </div>
        <div className="overlap_two_container">
          <h1 className="overlap_two">Shop The Capsule</h1>
        </div>
      </div>
    </>
  );
};

export default Firstrow;
