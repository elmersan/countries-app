import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CountryDetails } from "../components/CountryDetails";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

export const CountryScreen = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("country").toLowerCase();
  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/name/${name}`
  );
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/',{replace:true})
  }

  return (
    <>
      <button onClick={handleNavigate} className="ml-4 bg-White mt-4 shadow-md rounded-md py-2 px-8 flex items-center justify-center gap-2 font-semibold">
        <ion-icon name="arrow-back-outline"></ion-icon>
        Back
      </button>

      {loading ? (
        <Loading />
      ) : (
        data.map(
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
    </>
  );
};
