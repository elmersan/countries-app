import React from "react";

export const Country = ({
  flag,
  name,
  population,
  region,
  capital
}) => {
  return (
    <div className="rounded-md bg-White shadow-md overflow-hidden card-country w-[260px] sm:w-7">
      <div>
        <img
          src={flag}
          alt=""
          className="w-full"
        />
      </div>
      <div className="px-6 pb-9 font-semibold">
        <h3 className="font-extrabold py-[22px] text-lg">{name}</h3>
        <div className="flex gap-1 flex-col">
          <p className="text-sm">
            <span className="font-bold">Population: </span> {population}
          </p>
          <p className="text-sm">
            <span className="font-bold">Region: </span> {region}
          </p>
          <p className="text-sm">
            <span className="font-bold">Capital: </span> {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
