import React from "react";

export const Country = () => {
  return (
    <div className="rounded-md bg-White shadow-md overflow-hidden card-country w-[260px] sm:w-7">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
          alt=""
          className="w-full"
        />
      </div>
      <div className="px-6 pb-9 font-semibold">
        <h3 className="font-extrabold py-[22px] text-lg">Germany</h3>
        <div>
          <p className="text-sm">
            <span className="font-bold">Population: </span> 81,770,900
          </p>
          <p className="text-sm">
            <span className="font-bold">Region: </span> Europe
          </p>
          <p className="text-sm">
            <span className="font-bold">Capital: </span> Berlin
          </p>
        </div>
      </div>
    </div>
  );
};
