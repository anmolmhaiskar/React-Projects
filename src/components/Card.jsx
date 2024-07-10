import React from 'react';
import { useMausam } from "../contexts/Mausam";

const Card = () => {
    const mausam = useMausam();
    return (
      <div
        className="card"
        style={{
          backgroundImage: `url("${mausam.background}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <img src={mausam?.data?.current?.condition?.icon} />
        <h3>{mausam?.data?.current?.condition?.text}</h3>
        <hr></hr>
        <h2>{mausam?.data?.current?.temp_c}°C</h2>
        <h4>
          {mausam?.data?.location?.name} {mausam?.data?.location?.region}
          <p>{mausam?.data?.location?.country}</p>
        </h4>
      </div>
    );
};

export default Card;