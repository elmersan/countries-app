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
      <div className="rounded-md bg-White dark:bg-Dark_Blue_dark_elements shadow-md overflow-hidden card-country">
        <img
          src={flag}
          alt=""
          className="w-[320px] h-[180px] object-cover"
        />
        <div className="px-6 pb-9 font-semibold text-Very_Dark_Blue_Light_Mode_Text dark:text-White">
          <h3 className="font-extrabold py-[22px] text-lg">{name}</h3>
          <div className="flex gap-1 flex-col">
            <p className="text-sm">
              <b>Population: </b>
              <span className="font-light text-Very_Dark_Blue_Light_Mode_Text dark:text-Very_Light_Gray"> 
                {numberPopulation}
              </span> 
            </p>
            <p className="text-sm">
              <b>Region: </b>
              <span className="font-light text-Very_Dark_Blue_Light_Mode_Text dark:text-Very_Light_Gray">{region}</span>
            </p>
            <p className="text-sm">
              <b>Capital: </b>
              <span className="font-light text-Very_Dark_Blue_Light_Mode_Text dark:text-Very_Light_Gray">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
