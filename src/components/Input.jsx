import React from "react";
import { useMausam } from "../contexts/Mausam";

const Input = () => {
  const mausam = useMausam();
  return (
    <input
      type="text"
      placeholder="Search here"
      className="input-search"
      value={mausam?.searchRegion}
      onChange={(event) => mausam?.setSearchRegion(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          mausam?.setData(null);
          mausam?.setSearchRegion(event.target.value);
          mausam?.fetchMausamData();
        }
      }}
    />
  );
};

export default Input;
