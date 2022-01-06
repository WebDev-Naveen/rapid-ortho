import React, { useState } from "react";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  span {
    margin-left: 10px;
  }
`;

const Label = styled.label``;

const Toggle = styled.div`
  border: ${({ value }) =>
    value === 2
      ? "2px solid #999999"
      : value === 0
      ? "2px solid #F98E8E"
      : "2px solid #70cb91"};
  background: ${(props) =>
    props.value === 0 ? "#F98E8E" : props.value === 1 && "#70cb91"};
  /* background: ${(props) => (props.value === 2 ? "#999999" : "white")};*/
`;

const Input = styled.input`
  &:checked + ${Label} {
    border: ${({ valueChecked }) =>
      valueChecked === 2
        ? "2px solid #999999"
        : valueChecked === 0
        ? "2px solid #F98E8E"
        : "2px solid #70cb91"};
    background: ${(props) => (props.valueChecked === 2 ? "#999999" : "white")};

    /* background: ${(props) =>
      props.valueChecked === 0
        ? "#F98E8E"
        : props.valueChecked === 1 && "#70cb91"}; */
  }
`;

const SwitchToggleContainer = styled.div`
  width: 30%;
`;

const SwitchToggleWithTitle = (props) => {
  const { name } = props;
  const { control } = useFormContext();
  // const handleChange = (data) => {
  //   onChange(data);
  // };

  // const toggleStyle = {
  //   selectedStyle: {
  //     boxSizing: "border-box",
  //     background: value === "Mid" ? "#999999" : "white",
  //     border: "none",
  //     borderRadius: 4,

  //     height: 14,
  //   },
  //   wrapperStyle: {
  //     height: 26,
  //     width: 60,
  //     boxSizing: "border-box",
  //     background: value === "No" ? "#F98E8E" : value === "Yes" && "#70cb91",

  //     borderRadius: 10,
  //     border:
  //       value === "Mid"
  //         ? "2px solid #999999"
  //         : value === "No"
  //         ? "2px solid #F98E8E"
  //         : "2px solid #70cb91",
  //   },
  // };
  return (
    <Controller
      name={name}
      defaultValue={0}
      control={control}
      render={({ field }) => (
        <Container {...props}>
          <SwitchToggleContainer>
            <Toggle
              className="switch-toggle switch-3 switch-candy"
              value={field.value}
            >
              <div>
                <Input
                  valueChecked={field.value}
                  id="on"
                  name={name}
                  type="radio"
                  className="toggle"
                  value={0}
                  checked={field.value === 0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <Label htmlFor="on" className="toggle"></Label>
              </div>
              <div>
                <Input
                  id="na"
                  name={name}
                  type="radio"
                  value={2}
                  className="toggle"
                  valueChecked={field.value}
                  checked={field.value === 2}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <Label htmlFor="na" className="toggle"></Label>
              </div>
              <div>
                <Input
                  id="off"
                  name={name}
                  type="radio"
                  className="toggle"
                  valueChecked={field.value}
                  value={1}
                  checked={field.value === 1}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <Label htmlFor="off" className="toggle"></Label>
              </div>
            </Toggle>
          </SwitchToggleContainer>
          <span style={{ opacity: field.value === 2 && "0" }}>
            {field.value === 1 ? "Yes" : field.value === 0 ? "No" : "Mid"}
          </span>
        </Container>
      )}
    />
  );
};

export default React.memo(SwitchToggleWithTitle);
