import React from "react";
import styled from "styled-components";
import DropDown from "../../components/DropDown/DropDown";
import ReactTooltip from 'react-tooltip';
import SwitchToggleWithTitle from "../../components/SwitchToggle/SwitchToggleWithTitle";
const MainContainer = styled.section`
  margin: 0 20px;
`;

const SelectDetails = styled.div`
  border-top: 1px solid #d4d7db;
  height: 70px;
`;

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 55%;
`;
const AmountOFDisplacement = styled.div`
  width: 45%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tool = styled.span`
  padding-left:10px;
  padding-right:10px;
  background-color: #5cdafe;
  border-radius: 50%;
  margin-left:4px; 
  color:white;
  font-size: 10px;
 
`;
const Location = styled(AmountOFDisplacement)`
  width: 49%;
`;
const Parts = styled(AmountOFDisplacement)`
  width: 49%;
`;

const FractureCharacterstics = () => {
  return (
    <MainContainer>
      <Location style={{ width: "45%" }}>
        <Title style={{ width: "65%" }}>Injury of dominant shoulder
        <ReactTooltip/><Tool data-tip="Conservative">i</Tool></Title>
        <SwitchToggleWithTitle name={"Dominant_side"} />
      </Location>
      <SelectDetails>
        <FirstContainer>
          <Location style={{ width: "45%" }}>
            <Title>Fracture displaced</Title>
            <SwitchToggleWithTitle name={"Displaced"} />
          </Location>

          <AmountOFDisplacement>
            <Title style={{ width: "60%" }}>Amount of Displacement </Title>
            <DropDown
              options={["Small", "Medium", "Large", "NA"]}
              name="Amt_displace"
              width="100px"
            />
          </AmountOFDisplacement>
        </FirstContainer>
      </SelectDetails>
      <SelectDetails>
        <Location>
          <Title style={{ marginRight: "10px" }}>
            Humerus fracture location{" "}
          </Title>
          <DropDown
            options={[
              "Surgical neck",
              "Greater Tuberosity",
              "Head",
              "Upper end",
            ]}
            name="Location"
            width="140px"
          />
        </Location>
      </SelectDetails>
      <SelectDetails>
        <FirstContainer>
          <Parts>
            <Title style={{ marginRight: "10px" }}>Number of parts </Title>
            <DropDown
              options={["2-part", "3-part", "4-part"]}
              name="Parts"
              width="140px"
            />
          </Parts>
          <AmountOFDisplacement>
            <Title style={{ width: "70%" }}>Other concurrent fractures
            <ReactTooltip/><Tool data-tip="Conservative">i</Tool></Title>
            <SwitchToggleWithTitle name={"Other_fx"} />
          </AmountOFDisplacement>
        </FirstContainer>
      </SelectDetails>
    </MainContainer>
  );
};

export default FractureCharacterstics;