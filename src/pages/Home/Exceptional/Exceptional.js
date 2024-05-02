import React from "react";
import treatment from "../../../assets/images/treatment.png";
import CustomButton from "../../Shared/CustomButton/CustomButton";

const Exceptional = () => {
  return (
     
    <div className="my-28">
      <div className="lg:px-12 sm:px-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-2 sm:gap-6">
        <div>
        <img className="w-96 h-96" src={treatment} alt="treatment.png" />
        </div>
        <div className="flex items-center h-96 px-2">
        <div >
        <h1 className="text-3xl font-bold">Exceptional Dental Cares, On Your Terms</h1>
        <p className="pt-3 pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam distinctio dolore, rerum consequuntur amet recusandae repudiandae molestiae illo mollitia aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, optio.</p>
        <CustomButton>Let's start</CustomButton>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
