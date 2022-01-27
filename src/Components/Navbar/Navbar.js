import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_offer_details">
        <h3 className="offer_details">Free Shipping on orders over $50</h3>
      </div>
      <div className="navbar_content">
        <div className="navbar_brand_logo">
          <h1 className="brand_logo">Verie</h1>
        </div>
        <div className="navbar_links_container">
          <a href="#" className="navbar_links">
            New Arrivals
          </a>
          <a href="#" className="navbar_links">
            Clothing
          </a>
          <a href="#" className="navbar_links">
            Accessories
          </a>
          <a href="#" className="navbar_links">
            Jewelry
          </a>
        </div>
        <div className="navbar_icons">
          <a href="#" className="navbar_links">
            <i class="fas fa-search"></i>
          </a>
          <a href="#" className="navbar_links">
            <i class="fas fa-store"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
