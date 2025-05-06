import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingProducts } from "../utils/Data";

const TrendingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {trendingProducts.map((product, index) => (
          <div key={index} className="mt-10 mb-10">
            <img
              src={product.image}
              alt={product.name}
              className="h-[180px] w-[180px] border border-blue-100 rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
