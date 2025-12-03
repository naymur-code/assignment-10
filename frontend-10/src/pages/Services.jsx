import React, { useEffect, useState } from "react";
import Service from "../components/Service";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");
console.log(category);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/services?category=${category}`)
      .then((res) => setServices(res.data))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div>
      <div className="p-10">
        <select
          defaultValue="Choose Category"
          className="select appearance-none"
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option disabled={true}>Choose Category</option>
          <option>cat</option>
          <option>dog</option>
          <option>Velvet</option>
        </select>
      </div>
      <div className="px-[140px] grid grid-cols-3 gap-5 my-10">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
