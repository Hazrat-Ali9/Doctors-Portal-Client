import React from "react";
import appointment from "../../../assets/images/appointment.png";
import CustomButton from "../../Shared/CustomButton/CustomButton";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
      }}
      className="my-28"
    >
      <div className="py-10 px-6 lg:px-12 ">
        <h4 className="text-center text-xl font-bold text-primary">
          Contact us
        </h4>
        <h2 className="text-center text-3xl text-white">
          Stay connected with us
        </h2>
        <div className="pt-10">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full max-w-md block mx-auto"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-md block mx-auto"
          />
          <br />
          <textarea
            className="textarea w-full max-w-md block mx-auto"
            rows="4"
            placeholder="Your message"
          ></textarea>
          <br />
          <div className="flex justify-center">
            <CustomButton>Submit</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
