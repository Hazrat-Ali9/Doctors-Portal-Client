import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Exceptional from "../Exceptional/Exceptional";
import Features from "../Features/Features";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div >
        <Banner/>
        <Info/>
        <Services/>
        <Exceptional/>
        <MakeAppointment/>
        <Testimonials/>
        <Contact/>
        {/* <Features/> */}
        <Footer/>
    </div>
  );
};

export default Home;
