import React from "react";
import "./SecondRow.css";

const Secondrow = () => {
  return (
    <>
      <div className="second_row_container">
        <div className="title_container">
          <h1 className="title">Shop by dress style</h1>
        </div>
        <div className="dress_style_links_container">
          <a href="#" className="dress_style_links">
            A-Line
          </a>
          <a href="#" className="dress_style_links">
            Shift
          </a>
          <a href="#" className="dress_style_links">
            Slip
          </a>
          <a href="#" className="dress_style_links">
            Halter
          </a>
          <a href="#" className="dress_style_links">
            Maxi
          </a>
          <a href="#" className="dress_style_links">
            Gown
          </a>
          <a href="#" className="dress_style_links">
            Strapless
          </a>
          <a href="#" className="dress_style_links">
            Sun
          </a>
        </div>
      </div>
    </>
  );
};

export default Secondrow;
