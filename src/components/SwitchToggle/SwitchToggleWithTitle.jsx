import React from "react";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";

const Container = styled.div`
  display: flex;
  width: 110px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin-left: 10px;
  /* border: 1px solid black; */
  span {
    /* margin-left: 10px; */
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
  }
`;

const SwitchToggleContainer = styled.div`
  /* width: 30%; */
  width: 100px;
`;

const ToggleValue = styled.span`
  width: 30px;
`;

const SwitchToggleWithTitle = (props) => {
  const { name } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      defaultValue={2}
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
          <ToggleValue style={{ opacity: field.value === 2 && "0" }}>
            {field.value === 1 ? "Yes" : field.value === 0 ? "No" : "Mid"}
          </ToggleValue>
        </Container>
      )}
    />
  );
};

export default React.memo(SwitchToggleWithTitle);
