import React from "react";
import SubhamHr from "./../../assets/images/shubham.jpg";
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {

  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Vice President Information Technology at Readymotive
          </h1>
          <p className="mb-8 leading-relaxed">
            World's cheapest IOT fuel telematic platform can help vehicle owners
            solve almost every fuel related issue be it fuel theft, wastage,
            leakages, inefficiency etc. and also displays real time tracking.
          </p>
          <div className="flex justify-center py-12">
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              <a href="https://www.readymotive.in/" target="_blank">Go Forward</a>
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
            <Link to="/" >Go back</Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            className="ml-auto object-cover object-center rounded"
            width={"400px"}
            height={"auto"}
            alt="hero"
            src={SubhamHr}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
