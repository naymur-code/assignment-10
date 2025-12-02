import React, { useEffect, useState } from "react";
import Service from "./Service";
import axios from "axios";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/services")
      .then((res) => setServices(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-8 my-20">
        Popular Pet Section
      </h1>

      <div className="px-[140px] grid grid-cols-3 gap-5">
        {services.slice(0, 6).map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
