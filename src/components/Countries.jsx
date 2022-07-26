import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Country } from "./Country";
import { Loading } from "./Loading";

export const Countries = () => {
  
  const {countries} = useContext(UserContext)
  if(!countries) return
  const {data,loading,error} = countries 
  
  return (
    <div className="grilla-countries md:gap-16">
      {loading ? (
          <Loading />
        ) : (
        !error ? (
          data.map(
            ({
              flags: { svg },
              name: { common },
              population,
              region,
              capital,
            }) => (
              <Country
                key={common}
                flag={svg}
                name={common}
                population={population}
                region={region}
                capital={capital}
              />
            )
          )
        ):(
          <span className="text-Very_Dark_Blue_Light_Mode_Text dark:text-White">Country not found</span>
        )
      )}
    </div>
  );
};
