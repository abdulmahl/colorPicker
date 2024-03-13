import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <label htmlFor="">Add coolor name:</label>
      <input
        type="text"
        placeholder="Add color"
        reqiured
        value={colorValue}
        onChange={(ev) => {
          setColorValue(ev.target.value);
          setHexValue(colorNames(ev.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
