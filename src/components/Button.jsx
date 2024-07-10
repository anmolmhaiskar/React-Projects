import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMausam } from "../contexts/Mausam";

const Button = (props) => {
  const mausam = useMausam();
  return (
    <button onClick={props.onClick}>
      {<FontAwesomeIcon icon={props.value} />}
    </button>
  );
};

export default Button;
