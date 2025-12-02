import React from "react";
import { Link } from "react-router";

const Service = ({ service }) => {
  const { serviceName, price, rating, photoUrl } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="Shoes" width='100%' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <div className="flex justify-between">
          <p>price {price}</p>
          <p>rating {rating}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/serviceDetails/${service._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
