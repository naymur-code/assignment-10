import React from "react";

const MeetOurPets = () => {
  const pets = [
    {
      serviceId: 4,
      serviceName: "Dog Winter Coat Fitting",
      providerName: "FrostyPaws Boutique",
      providerEmail: "contact@frostypaws.com",
      price: 22,
      rating: 4.8,
      slotsAvailable: 7,
      description:
        "Get the perfect winter coat size for your dog to ensure warmth and comfort during cold days.",
      image: "https://i.postimg.cc/wintercoat.png",
      category: "Clothing",
    },
    {
      serviceId: 5,
      serviceName: "Dog Paw Balm Application",
      providerName: "PawCare Essentials",
      providerEmail: "support@pawcare.com",
      price: 12,
      rating: 4.6,
      slotsAvailable: 10,
      description:
        "Professional application of paw balm to protect cracked or dry paws, especially in winter.",
      image: "https://i.postimg.cc/pawbalm.png",
      category: "Grooming",
    },
    {
      serviceId: 6,
      serviceName: "Dog Raincoat Sizing",
      providerName: "RainyTail Outfitters",
      providerEmail: "hello@rainytail.com",
      price: 16,
      rating: 4.5,
      slotsAvailable: 6,
      description:
        "Accurate sizing service for dog raincoats to keep your pet dry and comfortable during rainy walks.",
      image: "https://i.postimg.cc/raincoat.png",
      category: "Clothing",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-5xl font-semibold text-center my-8">Meet Out Pets</h1>

      <div className="px-[140px] grid grid-cols-3">
        {pets.map((pet) => (
          <div key={pet.serviceId} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{pet.serviceName}</h2>
              <div className="flex justify-between">
                <p>price {pet.price}</p>
                <p>rating {pet.rating}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurPets;
