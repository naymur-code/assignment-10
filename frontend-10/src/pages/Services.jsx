import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/services")
      .then((res) => setServices(res.data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
      <div className="px-[140px] grid grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
