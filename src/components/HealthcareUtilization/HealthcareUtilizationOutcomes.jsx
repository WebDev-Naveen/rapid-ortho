import React from "react";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';
import img1 from "../../assets/images/icon.ico";

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const MainContainer = styled.div`
  /* padding: 20px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 400px;
  height: 250px;
  /* margin-left: 20px; */
  margin-top: 20px;
`;
const Container = styled.div`
  text-decoration: none;
  text-align: center;
`;

const Title = styled.div`
  padding-top: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
const P = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  flex-direction: column;
  width: 160px;
  height: 150px;
  margin-top: 50px;
  text-decoration: none;
`;
const Head = styled.h4`
  font-size: 20px;
  color: #cfcefd;
`;
const Span = styled.span`
  padding-top: 40px;
  font-size: 16px;
`;
const Span1 = styled.span`
  padding-top: 30px;
  font-size: 16px;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Tool = styled.span`
margin-left: 5px;
margin-bottom:15;
 
`;
const Img = styled.img`
border-radius: 50%;
`;

/*const SecondContainer = styled(FirstContainer)``;

const ThirdContainer = styled(FirstContainer)``;*/

const HealthcareUtilizationOutcomes = ({ title, value1, value2 }) => {
  return (
    <Section>
      <FirstContainer>
        <MainContainer>
          <Container>
            <Title>{title}<ReactTooltip/><Tool data-tip="Conservative">
            <Img src={img1} alt="ToolTip" width="15px" height="15px"/>
            </Tool></Title>
            <Div>
              <P>
                <Head>{`${value1}`}</Head> <Span>Initial Surgery</Span>
              </P>
              <P>
                <Head>{`${value2}`}</Head>{" "}
                <Span1>Conservative Management</Span1>
              </P>
            </Div>
          </Container>
        </MainContainer>
      </FirstContainer>
    </Section>
  );
};

export default HealthcareUtilizationOutcomes;
