import React from "react";
import styled from "styled-components";
import LineBar from "./LineBar";
import ReactTooltip from "react-tooltip"
import img1 from "../../assets/images/icon.ico";
const MainContainer = styled.div`
  /* height: fit-content; */
  background-color: #fff;
  padding-bottom: 30px;
  height: 980px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 70%;
  margin: 0 auto;

  margin-top: 20px;
`;

const Div = styled.div`
  width: 20px;
  height: 20px;
  background-color: #a4a1fb;
  border-radius: 50%;
  margin-right: 250px;
  margin-top: 10px;
`;
const Div2 = styled.div`
  width: 20px;
  height: 20px;
  background-color: #5cdafe;
  border-radius: 50%;
  margin-right: 250px;
  margin-top: 10px;
`;
const P = styled.span`
  display: inline-block;
  white-space: nowrap;
  font-size: 18px;
  margin-top: -20px;
  margin-left: 30px;
`;
const Tool = styled.span`
 margin-left: 5px;
 margin-top: 10px;
`;

const MeanOutcomeScores = () => {
  return (
    <MainContainer>
      <Container>
        <Div>
          <P>Initial Surgery<ReactTooltip/><Tool data-tip="Initial Surgery">
          <img src={img1} alt="logo" width="15px" height="15px"/> 
          </Tool></P>
        </Div>
        <Div2>
          <P>Conservative Management<ReactTooltip/><Tool data-tip="onservative Management">
          <img src={img1} alt="logo" width="15px" height="15px"/> 
          </Tool></P>
        </Div2>
      </Container>
      <LineBar />
    </MainContainer>
  );
};

export default MeanOutcomeScores;
