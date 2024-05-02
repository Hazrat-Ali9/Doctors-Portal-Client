import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import CustomButton from "../../Shared/CustomButton/CustomButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center px-6 lg:px-12 w-[100%]"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="doctor.png" />
      </div>
      <div className="flex-1 py-4">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h1 className="text-3xl text-white my-2">Make an appointment today</h1>
        <p className="text-white my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          asperiores esse voluptate consequatur delectus, voluptatibus tenetur
          reprehenderit similique quibusdam perferendis numquam consequuntur,
          maxime nemo iure voluptas est? Deserunt fuga culpa excepturi libero
          quis nam ab, officia eius nihil corrupti amet.
        </p>
        <CustomButton>Get started</CustomButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
