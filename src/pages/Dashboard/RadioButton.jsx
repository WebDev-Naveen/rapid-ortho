import React from "react";
import styled from "styled-components";
import { useFormContext, Controller } from "react-hook-form";
const Span = styled.span`
  margin-right: 40px;
`;
const Wrapper = styled.div`
  width: 100%;
  /* padding: 0px 16px 24px 16px; */
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 70px;
`;

const RadioButton = () => {
  const { control } = useFormContext();
  return (
    <>
      <Wrapper>
        <Span>Patient Sex</Span>
        <Controller
          name="Male"
          control={control}
          render={({ field }) => (
            <>
              <label className="container" htmlFor="female">
                Female
                <input
                  type="radio"
                  value={0}
                  name="gender"
                  id="female"
                  checked={field.value === 0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container" htmlFor="male">
                Male
                <input
                  type="radio"
                  value={1}
                  name="gender"
                  id="male"
                  checked={field.value === 1}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <span className="checkmark"></span>
              </label>
            </>
          )}
        />
      </Wrapper>
    </>
  );
};

export default RadioButton;
