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
    <div className="px-4 mt-16 pb-8 overflow-hidden card-country flex md:items-center flex-col md:flex-row gap-8 md:justify-between md:gap-28">
      <div className="flex-1">
        <img src={flag} alt={name} className="object-cover" />
      </div>
      <div className="pb-9 font-semibold md:flex-[1.3]">
        <h3 className="font-extrabold py-[35px] text-lg">{name}</h3>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex gap-3 flex-col">
            <p className="text-sm">
              <span className="font-bold">Native Name: </span> {common}
            </p>
            <p className="text-sm">
              <span className="font-bold">Population: </span> {numberPopulation}
            </p>
            <p className="text-sm">
              <span className="font-bold">Region: </span> {region}
            </p>
            <p className="text-sm">
              <span className="font-bold">Sub Region: </span> {subregion}
            </p>
            <p className="text-sm">
              <span className="font-bold">Capital: </span> {capital}
            </p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="text-sm">
              <span className="font-bold">Top Level Domain: </span> {tld}
            </p>
            <p className="text-sm">
              <span className="font-bold">Currencies: </span> {curr[0].name}
            </p>
            <p className="text-sm">
              <span className="font-bold">Languages: </span> {lang.toString()}
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
                  className="bg-White text-center shadow-md rounded-md px-6 py-1"
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
