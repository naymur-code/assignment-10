import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";

const MyServices = () => {
  const [myservices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:8000/myservices?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyServices(data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8000/delete/${id}`)
    .then(res=>{
      console.log(res)
      const filterItems=myservices.filter(service=>service._id!==id);
      setMyServices(filterItems);
    })
    // console.log(id);

  }
  return (
    <div>
      <h1>My Services</h1>
      <div className="overflow-x-auto">
        <table className="table p-20">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myservices.map((service) => (
              <tr key={service._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service?.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.serviceName}</div>
                      <div className="text-sm opacity-50">
                        {service?.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th className="flex gap-3">
                  <button className="btn btn-error btn-xs" onClick={()=>handleDelete(service._id)}>Delete</button>
                  <Link to={`/updateservices/${service?._id}`}>
                  <button className="btn btn-primary btn-xs">Edit</button>

                  </Link>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
