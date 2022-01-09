import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";

const Div = styled.div`
  padding: 0 8px;
`;
const Container = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
 
`;

const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #EBEBF1;
`;
const Button = styled.button`
  padding: 5px;
  padding-left: 5px;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
  font-size: 12px;
 
  /* color: #8ca6dc; */
  outline: none;
  border: none;
  background-color: #E5E5E5;
  color:#557FD5;
`;
const Span = styled.span`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: #E5E5E5;
  
`;
const Link = styled(NavLink)`
  width: 32.5%;
  height: 45px;

  padding: 10px;
  text-align: left;
  text-decoration: none;
  color: #9e9dab;
  background-color: #f8f8f8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;

//#F8F8F8
//text color #9E9DAB
const navStyle = {
  background: "#006891",
  color: "#fff",
};

const Buttons = () => {
  const { filterValues } = useContext(ChartValuesContext);

  return (
    <Div>
      <Container>
        {Object.keys(filterValues)?.map((e) => (
          <Button key={e} style={{ display: filterValues[e] === 2 && "none" }}>
            {/* <Span>20-50 years</Span> */}
            <Span>
              {e === "Age"
                ? `${filterValues[e]?.min}-${filterValues[e]?.max} Years`
                : filterValues[e] !== 2 && `${e} ${filterValues[e]}`}
            </Span>
            <Span>{filterValues[e] !== 2 && "x"}</Span>
          </Button>
        ))}
      </Container>
      <NavigationButtonsContainer>
        <Link to="/treatementComparators" activeStyle={navStyle}>
          Treatment Comparators
        </Link>
        <Link to="/meanOutcomeScores" activeStyle={navStyle}>
          Mean Outcome Scores
        </Link>
        <Link to="/healthcareUtilizationOutcomes" activeStyle={navStyle}>
          Healthcare Utilization Outcomes
        </Link>
      </NavigationButtonsContainer>
    </Div>
  );
};

export default Buttons;
