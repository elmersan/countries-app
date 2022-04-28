import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Country } from "./Country";
import { Loading } from "./Loading";

export const Countries = () => {
  
  const {loading,data} = useFetch("https://restcountries.com/v3.1/all")
  
  return (
    <div className="py-8 flex justify-center items-center flex-col gap-10">
      {loading ? (
          <Loading />
        ) : (
        data.map(
          ({
            flags: { png },
            name: { common },
            population,
            region,
            capital,
          }) => (
            <Country
              key={common}
              flag={png}
              name={common}
              population={population}
              region={region}
              capital={capital}
            />
          )
        )
      )}
    </div>
  );
};
