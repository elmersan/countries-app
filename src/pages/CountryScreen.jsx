import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CountryDetails } from "../components/CountryDetails";
import { Loading } from "../components/Loading";
import { getCountryByFullName } from "../helpers/getCountryByFullName";

export const CountryScreen = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("country");
  const { data, loading,error } = getCountryByFullName(name);
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <>
      <button onClick={handleNavigate} className="ml-4 bg-White mt-4 shadow-md rounded-md py-2 px-8 flex items-center justify-center gap-2 font-semibold">
        <ion-icon name="arrow-back-outline"></ion-icon>
        Back
      </button>

      <div className="flex justify-center items-center">  
        {loading ? (
          <Loading />
        ) : (
          !error && data.map(
            ({
              borders,
              flags: { png },
              name: { common,nativeName },
              population,
              region,
              subregion,
              capital,
              tld,
              currencies,
              languages
            }) => (
              <CountryDetails
                key={common}
                borders={borders}
                flag={png}
                name={common}
                nativeName={nativeName}
                population={population}
                region={region}
                subregion={subregion}
                capital={capital}
                tld={tld}
                currencies={currencies}
                languages={languages}
              />
            )
          )
        )}
      </div>
    </>
  );
};