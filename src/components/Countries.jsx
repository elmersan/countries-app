import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Country } from "./Country";
import { Loading } from "./Loading";

export const Countries = () => {
  
  const {countries} = useContext(UserContext)
  if(!countries) return
  const {data,loading,error} = countries 
  
  return (
    <div className="py-8 flex justify-center items-center flex-col gap-10">
      {loading ? (
          <Loading />
        ) : (
        !error ? (
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
        ):(
          <span>Country not found</span>
        )
      )}
    </div>
  );
};
