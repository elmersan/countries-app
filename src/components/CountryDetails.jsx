import React from "react";
import { useFetch } from "../hooks/useFetch";
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

  const { data, loading, error } =
    bord.length > 0
      ? useFetch(
          `https://restcountries.com/v3.1/alpha?codes=${bord.toString()}`
        )
      : { data: null, loading: false, error: 'error' };

  return (
    <div className="px-4 mt-16 overflow-hidden card-country">
      <div className="h-56 overflow-hidden">
        <img src={flag} alt={name} className="w-full" />
      </div>
      <div className="pb-9 font-semibold">
        <h3 className="font-extrabold py-[35px] text-lg">{name}</h3>
        <div className="flex flex-col gap-10">
          <div className="flex gap-3 flex-col">
            <p className="text-sm">
              <span className="font-bold">Native Name: </span> {common}
            </p>
            <p className="text-sm">
              <span className="font-bold">Population: </span> {population}
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
          <div>
            <h3 className="font-bold mb-5">Border Countries</h3>
            <div className="grilla">
              {loading ? (
                <Loading />
              ) : (
                !error &&
                data.map(({ name: { common } }) => (
                  <span
                    key={common}
                    className="bg-White text-center shadow-md rounded-md px-6 py-1"
                  >
                    {common}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
