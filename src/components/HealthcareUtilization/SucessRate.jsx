import React from "react";
import styled from "styled-components";
import HalfDonutChart from "../ChartBar/HalfDonutChart";
import ReactTooltip from "react-tooltip";

const Section = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 900px;
  height: 350px;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 140px;
`;
const Container = styled.div`
  display: flex;
`;
const P = styled.p`
  text-align: center;
  font-size: 18px;
`;

const HalfChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
`;
const FirstContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  margin-left: 15px;
  width: 400px;
  height: 250px;
`;
const P1 = styled.p`
  display: block;
  font-size: 20px;
  padding: 5px;

  text-align: center;
`;
const Tool = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #5cdafe;
  border-radius: 50%;
  margin-left: 4px;
  color: white;
  font-size: 10px;
`;
const SucessRate = ({ value }) => {
  return (
    <Section>
      <P>
        Percentage of patients reaching Treatment Success
        <ReactTooltip />
        <Tool data-tip="Conservative">i</Tool>
      </P>
      <Container>
        <HalfChartContainer>
          <FirstContainer>
            <P1>
              Initial Surgery
              <ReactTooltip />
              <Tool data-tip="Conservative">i</Tool>
            </P1>
            <HalfDonutChart
              colors={["#A4A1FB", "#F0F2F8"]}
              rate={value?.initialSurgery}
            />
          </FirstContainer>
        </HalfChartContainer>

        <HalfChartContainer>
          <FirstContainer>
            <P1>
              Conservative Management
              <ReactTooltip />
              <Tool data-tip="Conservative">i</Tool>
            </P1>

            <HalfDonutChart
              colors={["rgb(86,217,254)", "#F0F2F8"]}
              rate={value?.conservativeManagement}
            />
          </FirstContainer>
        </HalfChartContainer>
      </Container>
    </Section>
  );
};

export default SucessRate;
