import React from 'react';

const Card = ({ title, link }) => {
  return (
    <div className="w-76 h-22 flex flex-col overflow-hidden rounded shadow-lg">
      <img className="h-22 object-cover" src={link} alt={title} />

      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      {/* <div className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
