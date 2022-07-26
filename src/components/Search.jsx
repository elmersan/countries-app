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

  if(!data) return

  useEffect(() => {
    if (country !== "") {
      setCountries({ ...data });
    }
  }, [setCountries, data]);

  return (
    <div
      className="bg-White dark:bg-Dark_Blue_dark_elements shadow-md px-8 rounded-md flex items-center gap-7 md:w-[450px]"
      id="search"
    >
      <span className="inline-flex">
        <ion-icon name="search-outline"></ion-icon>
      </span>
      <input
        type="text"
        className="py-[18px] w-full outline-none text-sm bg-White dark:bg-Dark_Blue_dark_elements text-Very_Dark_Blue_Light_Mode_Text dark:text-White"
        placeholder="Search for a country..."
        name="country"
        value={country}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
