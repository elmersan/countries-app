import React from "react";
import { Link } from "react-router-dom";

export const Country = ({
  flag,
  name,
  population,
  region,
  capital
}) => {

  const numberPopulation = new Intl.NumberFormat("es-MX").format(population);

  return (
    <Link to={`/countries?country=${name}`}>
      <div className="rounded-md bg-White shadow-md overflow-hidden card-country">
        <img
          src={flag}
          alt=""
          className="w-[320px] h-[180px] object-cover"
        />
        <div className="px-6 pb-9 font-semibold">
          <h3 className="font-extrabold py-[22px] text-lg">{name}</h3>
          <div className="flex gap-1 flex-col">
            <p className="text-sm">
              <span className="font-bold">Population: </span> {numberPopulation}
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
    </Link>
  );
};
