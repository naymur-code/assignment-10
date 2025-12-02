import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const providerEmail = form.providerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const category = form.category.value;
    const photoUrl = form.photoUrl.value;

    const formData = {
      serviceName,
      providerEmail,
      price,
      description,
      photoUrl,
      rating,
      category,
    };

    axios
      .post("http://localhost:8000/services", formData)
      .then((res) => {
        console.log(res);
        alert('new service add!')
        form.reset()
      })
      .catch((error) => console.log(error));

    console.log(formData);
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg border border-gray-200 space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add New Service
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {/* Service Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Service Name
            </label>
            <input
              type="text"
              name="serviceName"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter service name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Provider Email
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="providerEmail"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter provider email"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              photoUrl
            </label>
            <input
              type="text"
              name="photoUrl"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter provider email"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="25"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              name="rating"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="4.9"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500"
              placeholder="Write service description..."
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Clothing"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Service
        </button>
      </form>
    </div>
  );
};

export default AddServices;
