import { isNumber } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
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
  border-bottom: 1px solid #ebebf1;
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
  background-color: #e5e5e5;
  color: #557fd5;
`;
const Span = styled.span`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: #e5e5e5;
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
  const { setValue } = useFormContext();
  const { filterValues, setFilterValues } = useContext(ChartValuesContext);
  const [filterNames, setFilterNames] = useState([]);
  useEffect(() => {
    let names = [];
    for (let i in filterValues) {
      if (i !== "Age") {
        if (i === "Male") {
          if (filterValues[i] === 0) {
            names.push({
              label: i,
              value: "Female",
            });
          } else if (filterValues[i] === 1) {
            names.push({
              label: i,
              value: "Male",
            });
          }
        } else if (isNumber(filterValues[i])) {
          if (filterValues[i] === 0) {
            names.push({
              label: i,
              value: `No ${i}`,
            });
          } else if (filterValues[i] === 1) {
            names.push({
              label: i,
              value: i,
            });
          }
        } else {
          if (
            (i === "Amt_displace" && filterValues[i] !== "NA") ||
            (i === "Location" && filterValues[i] !== "Greater Tuberosity") ||
            (i === "Parts" && filterValues[i] !== "2-part")
          ) {
            names.push({
              label: i,
              value: filterValues[i],
            });
          }
        }
      }
      if (i === "Age") {
        if (
          (filterValues[i]?.max !== 110 && filterValues[i]?.min !== 0) ||
          filterValues[i]?.max < 110 ||
          filterValues[i] > 0
        ) {
          names.push({
            label: i,
            value: `${filterValues[i].min}-${filterValues[i].max} Years`,
          });
        }
      }
    }
    setFilterNames(names);
  }, [filterValues]);

  const handleDeleteFilter = (val) => {
    let filters = { ...filterValues };
    if (isNumber(filters[val])) {
      filters[val] = 2;
      setValue(val, 2);
    }
    if (val === "Age") {
      filters[val] = { min: 0, max: 110 };
      setValue(val, { min: 0, max: 110 });
    } else {
      if (val === "Amt_displace") {
        filters[val] = "NA";
        setValue(val, "NA");
      }
      if (val === "Location") {
        filters[val] = "Greater Tuberosity";
        setValue(val, "Greater Tuberosity");
      }
      if (val === "Parts") {
        filters[val] = "2-part";
        setValue(val, "2-part");
      }

      //      "Amt_displace": "NA",
      // "Location": "Greater Tuberosity",
      // "Parts": "4-part",
    }
    setFilterNames(filterNames.filter((value) => value.label !== val));
    setFilterValues(filters);
  };
  console.log(filterValues);
  return (
    <Div>
      <Container>
        {filterNames?.map((e, index) => (
          <Button
            key={index}
            type="button"
            onClick={() => handleDeleteFilter(e?.label)}
          >
            {/* <Span>20-50 years</Span> */}
            <Span>{e?.value}</Span>
            <Span>x</Span>
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
