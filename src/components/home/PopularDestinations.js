import React from 'react';
const PopularDestinations = ({ agninav, rangghar, karengghar, talatalghar }) => {
  const destinations = [
    {
      src: agninav,
      name: 'Agninav Mandir'
    },
    {
      src: rangghar,
      name: 'Rang Ghar'
    },
    {
      src: karengghar,
      name: 'Kareng Ghar'
    },
    {
      src: talatalghar,
      name: 'Talatal Ghar'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-brand text-center mb-8">
          Popular Destinations Near Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {destinations.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.src}
                alt={item.name}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <p className="mt-4 text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;