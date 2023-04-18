import React from "react";
import { Carousel } from "react-responsive-carousel";

function Collection() {
  return (
    <div key={collect.id} className="popular-images">
      <div className="img-area">
        <div className="large-img shadow-xs">
          <img src={collect.image1} alt="" />
        </div>
        <div className="small-img">
          <img src={collect.image2} alt="" />
          <img src={collect.image3} alt="" />
          <img src={collect.image4} alt="" />
        </div>
        <div className="tag">
          <span>{collect.tag}</span>
          <div className="view-count">
            <img src="images/popular image/img.png" alt="" />
            <p>{collect.view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
