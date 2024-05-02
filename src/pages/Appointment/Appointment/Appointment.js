import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner"; 
import { useState } from "react";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments"; 

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date}/> 
      <Footer />
    </div>
  );
};

export default Appointment;
