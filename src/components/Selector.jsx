import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { getCountriesByRegion } from "../helpers/getCountriesByRegion";

const regions = [
  {
    name: "Africa",
  },
  {
    name: "Americas",
  },
  {
    name: "Asia",
  },
  {
    name: "Europe",
  },
  {
    name: "Oceania",
  },
];

export const Selector = () => {
  const ref = useRef(null);
  const [hide, setHide] = useState(false);
  const [region, setRegion] = useState("");
  const { setCountries } = useContext(UserContext);
  const data = getCountriesByRegion(region ? region : "americas");

  useEffect(() => {
    if (region !== "") {
      setCountries({ ...data });
    }
  }, [setCountries, data]);

  const handleClick = ({ target }) => {
    if (ref !== null) {
      ref.current.innerHTML = target.innerText;
      setHide(!hide);
      setRegion(target.innerText);
    }
  };

  const handleClickSelector = () => {
    setHide(!hide);
  };

  return (
    <div className="md:mt-0 mt-11 w-3/5 md:w-auto relative">
      <div
        onClick={handleClickSelector}
        className="md:gap-8 rounded-md cursor-pointer bg-White flex justify-between py-[14px] items-center px-8 pr-4 shadow-md"
      >
        <p ref={ref} className="text-sm font-semibold">
          Filter by Region
        </p>
        <span className={`${hide?"up":""} icon-selector inline-flex`}>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </span>
      </div>

      {hide && (
        <ul className="bg-White mt-1 rounded-md shadow-md text-sm font-semibold absolute left-0 right-0 top-12 py-4">
          {regions.map(({ name }) => (
            <li
              key={name}
              onClick={handleClick}
              className="cursor-pointer px-8 py-[5px] hover:bg-Very_Light_Gray"
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
