import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { getCountryByName } from "../helpers/getCountryByName";
import { useForm } from "../hooks/useForm";

export const Search = () => {
  const [formValues, handleInputChange, reset] = useForm({
    country: "",
  });
  const { country } = formValues;

  const { setCountries } = useContext(UserContext);
  const data = getCountryByName(country ? country : "peru");

  useEffect(() => {
    if (country !== "") {
      setCountries({ ...data });
    }
  }, [setCountries, data]);

  return (
    <div
      className="bg-White shadow-md px-8 rounded-md flex items-center gap-7 md:w-[450px]"
      id="search"
    >
      <ion-icon name="search-outline"></ion-icon>
      <input
        type="text"
        className="py-[14px] w-full outline-none text-sm"
        placeholder="Search for a country..."
        name="country"
        value={country}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
