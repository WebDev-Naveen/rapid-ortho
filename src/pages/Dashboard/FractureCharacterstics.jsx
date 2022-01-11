import React from "react";
import styled from "styled-components";
import DropDown from "../../components/DropDown/DropDown";
import ReactTooltip from "react-tooltip";
import SwitchToggleWithTitle from "../../components/SwitchToggle/SwitchToggleWithTitle";
import img1 from "../../assets/images/icon.ico";
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
  margin-bottom: 50px;
  margin-left: 5px;
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
      <Location style={{ width: "50%" }}>
        <Title style={{ width: "65%" }}>
          Injury of dominant shoulder
          <ReactTooltip />
          <Tool data-tip="Injury of dominant shoulder">
            <img src={img1} alt="ToolTip" width="15px" height="15px" />
          </Tool>
        </Title>
        <SwitchToggleWithTitle name={"Dominant_side"} />
      </Location>
      <SelectDetails>
        <FirstContainer>
          <Location style={{ width: "50%" }}>
            <Title>Fracture displaced</Title>
            <SwitchToggleWithTitle name={"Displaced"} />
          </Location>

          <AmountOFDisplacement>
            <Title style={{ width: "60%" }}>Amount of Displacement </Title>
            <DropDown
              options={["NA", "Small", "Medium", "Large"]}
              name="Amt_displace"
              width="120px"
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
              "Greater Tuberosity",
              "Surgical neck",
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
            <Title style={{ width: "70%" }}>
              Other concurrent fractures
              <ReactTooltip />
              <Tool data-tip="Other concurrent fractures">
                <img src={img1} alt="ToolTip" width="15px" height="15px" />{" "}
              </Tool>
            </Title>
            <SwitchToggleWithTitle name={"Other_fx"} />
          </AmountOFDisplacement>
        </FirstContainer>
      </SelectDetails>
    </MainContainer>
  );
};

export default FractureCharacterstics;
