import React from "react";

const CardDesign = () => {
  return (
    <div className="card-product">
      <img
        src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg"
        alt=""
      />
      <div className="card-product-infos">
        <h2>Product name</h2>
        <p>
          Product description with <strong>relevant info</strong> only.
        </p>
      </div>
    </div>
  );
};

export default CardDesign;
