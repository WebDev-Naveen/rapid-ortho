import React, { useEffect } from "react";
import styled from "styled-components";

const RangeBarContainer = styled.div`
  width: ${(props) => (props.max === "110" ? "400px" : "150px")};

  span {
    display: block;
    /* width: 100%; */
    border: 1px solid black;
    text-align: ${(props) => (props.max === "110" ? "right" : "right")};
    width: ${(props) =>
      props.max === "110" ? `${props.val * 3.64}px` : `${props.val * 5}px`};
  }
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
    if (name === "min") {
      const bubble = document.querySelector(`.min`);
      const newVal = Number(((value - min) * 100) / (max - min));
      bubble.innerHTML = value;

      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    } else {
      const bubble = document.querySelector(`.max`);
      const newVal = Number(((value - min) * 100) / (max - min));
      bubble.innerHTML = value;

      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }, [value, min, max, name]);

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
        id={name}
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
      <output class={`${name} bubble`}></output>
      {/* <output for={name} onforminput="value = foo.valueAsNumber;"></output> */}
      {/* <span>{value}</span> */}
    </RangeBarContainer>
  );
};

export default RangeBar;
