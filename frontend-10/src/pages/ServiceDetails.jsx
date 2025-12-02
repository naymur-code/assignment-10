import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/services/${id}`)
      .then((res) => setService(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(service);

  return (
    <div className="my-6 text-center p-20">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={service?.photoUrl} alt="Album"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{service.serviceName}</h2>
          <h2 className="card-title text-4xl">${service.price}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
