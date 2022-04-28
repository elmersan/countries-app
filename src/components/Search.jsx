import React from "react";
import { useForm } from "../hooks/useForm";

export const Search = () => {

  const [formValues, handleInputChange, reset] = useForm({
    country: ""
  });
  const {country} = formValues

  return (
    <div
      className="bg-White shadow-md px-8 rounded-md flex items-center gap-7"
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
