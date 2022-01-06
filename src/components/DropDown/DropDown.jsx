import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

const Select = styled.select`
  /* margin-bottom: 10px; */
  border: 2px solid #fecb2e;
  height: 30px;
  min-width: 80px;
  width: ${(props) => props.width};
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: "Poppins";
`;

function DropDown({ options, name, width }) {
  const { register } = useFormContext();

  return (
    <Select {...register(name)} width={width}>
      {options?.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export default DropDown;
