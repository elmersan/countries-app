import React from "react";
import { getCountriesByCodes } from "../helpers/getCountriesByCodes";
import { Loading } from "./Loading";

export const CountryDetails = ({
  borders,
  name,
  nativeName,
  flag,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
}) => {
  const lang = languages ? Object.values(languages) : [];
  const curr = currencies ? Object.values(currencies) : [""];
  const { common } = Object.values(nativeName).pop();
  const bord = borders ? borders : [];

  const { data, loading, error } = getCountriesByCodes(bord);
  const numberPopulation = new Intl.NumberFormat("es-MX").format(population);

  return (
    <div className="px-4 mt-16 pb-8 overflow-hidden card-country flex md:items-center flex-col md:flex-row gap-8 md:justify-between md:gap-28 text-Very_Dark_Blue_Light_Mode_Text dark:text-White">
      <div className="flex-1">
        <img src={flag} alt={name} className="object-cover" />
      </div>
      <div className="pb-9 font-semibold md:flex-[1.3]">
        <h3 className="font-extrabold py-[35px] text-lg">{name}</h3>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex gap-3 flex-col">
            <p className="text-sm">
              <b>Native Name: </b>
              <span className="font-light">{common}</span>
            </p>
            <p className="text-sm">
              <b>Population: </b>
              <span className="font-light">{numberPopulation}</span>
            </p>
            <p className="text-sm">
              <b>Region: </b>
              <span className="font-light">{region}</span> 
            </p>
            <p className="text-sm">
              <b>Sub Region: </b>
              <span className="font-light">{subregion}</span> 
            </p>
            <p className="text-sm">
              <b>Capital: </b>
              <span className="font-light">{capital}</span> 
            </p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-sm">
              <b>Top Level Domain: </b>
              <span className="font-light">{tld}</span>
            </p>
            <p className="text-sm">
              <b>Currencies: </b>
              <span className="font-light">{curr[0].name}</span>
            </p>
            <p className="text-sm">
              <b>Languages: </b>
              <span className="font-light">{lang.toString()}</span>
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row w-full gap-2">
          <h3 className="font-bold mb-5 md:mt-[5px]">Border Countries: </h3>
          <div className="grilla flex-1">
            {loading ? (
              <Loading />
            ) : (
              !error ?(
              data.map(({ name: { common } }) => (
                <span
                  key={common}
                  className="bg-White font-light dark:bg-Dark_Blue_dark_elements text-Very_Dark_Blue_Light_Mode_Text dark:text-White text-center shadow-md rounded-md px-6 py-1"
                >
                  {common}
                </span>
              ))
              ):(
                <span>No neighboring countries</span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
