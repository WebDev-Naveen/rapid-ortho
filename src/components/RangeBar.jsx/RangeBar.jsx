import React, { useEffect } from "react";
import styled from "styled-components";

const RangeBarContainer = styled.div`
  width: ${(props) => (props.max === "110" ? "400px" : "150px")};
`;
var thumbsize = 14;
const RangeBar = ({ min, max, name, value, onChange }) => {
  useEffect(() => {
    for (let e of document.querySelectorAll(
      'input[type="range"].slider-progress'
    )) {
      e.style.setProperty("--value", e.value);
      e.style.setProperty("--min", e.min === "" ? "0" : e.min);
      e.style.setProperty("--max", e.max === "" ? "100" : e.max);
      e.addEventListener("input", () =>
        e.style.setProperty("--value", e.value)
      );
    }
  }, []);

  const handleChange = (e) => {
    onChange(Number(e?.target?.value));
  };
  return (
    <RangeBarContainer
      data-legendnum="2"
      data-rangemin={min}
      data-rangemax={max}
      data-thumbsize={thumbsize}
      val={value}
      max={max}
    >
      <input
        id="min"
        className="styled-slider slider-progress"
        style={{ width: "100%" }}
        name={name}
        type="range"
        step="1"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
      {/* <input type="range" /> */}
    </RangeBarContainer>
  );
};

export default RangeBar;
