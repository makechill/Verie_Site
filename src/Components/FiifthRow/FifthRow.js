import React from "react";
import "./FifthRow.css";

const Fifthrow = () => {
  return (
    <>
      <div className="fifth_row_container">
        <div className="free_shipping_container">
          {/* <i class="fas fa-wallet"></i> */}
          <i class="far fa-comment"></i>
          <h1 className="free_ship">Free Shipping over $60 USD</h1>
          <p className="free_ship_canada">
            Shipping is on us across US & Canada.
          </p>
        </div>
        <div className="easy_returns_container">
          {/* <i class="fas fa-redo"></i> */}
          <i class="far fa-comment"></i>
          <h1 className="free_ship">Easy Returns</h1>
          <p className="free_ship_canada">
            Absolutely love it or send it back.
          </p>
        </div>
        <div className="stylists_container">
          <i class="far fa-comment"></i>
          <h1 className="free_ship">Stylists on Call</h1>
          <p className="free_ship_canada">Chat, email or DM us anytime.</p>
        </div>
      </div>
    </>
  );
};

export default Fifthrow;
