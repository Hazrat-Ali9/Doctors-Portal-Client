import React from "react";
import chair from "../../../assets/images/chair.png";
import bannerBg from "../../../assets/images/bg.png";
import CustomButton from "../../Shared/CustomButton/CustomButton";

const Banner = () => {
  return (
    <div
    style={{
      background: `url(${bannerBg})`,
      backgroundSize: "cover",
    }}
    className="hero min-h-screen lg:px-12 sm:px-6">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} className="lg:max-w-md rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your new smile starts here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
           <CustomButton>Get started</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
