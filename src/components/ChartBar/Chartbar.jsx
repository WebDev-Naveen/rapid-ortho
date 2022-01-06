import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import Buttons from "./Buttons";
import HealthcareUtilizationOutcomes from "../HealthcareUtilization/HealthcareUtilizationOutcomes";
import MeanOutcomeScores from "../MeanOutcomes/MeanOutcomeScores";
import TreatementComparators from "../Treatement/TreatementComparators";
import SucessRate from "../HealthcareUtilization/SucessRate";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";
import { getAvgInitialSurgAndConservativeManagement } from "../../utils/getAvgInitialSurgAndConservativeManagement";
import { percentTreatmentSucsess } from "../../utils/percentTreatmentSuccess";
import { getSum } from "../../utils/getSum";

const CharBarContainer = styled.div`
  width: 65%;
  margin-left: 20px;
  background: white;
  height: fit-content;
  padding-bottom: 30px;
`;
const Div = styled.div`
  width: 100%;
  height: 1100px;
  border-radius: 3px;
  /* background: white; */
`;

const HealthCareContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
`;
const MiddleContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 270px;
  width: 250px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  p {
    padding: 5px;
    margin-top: 10px;
    text-align: center;
  }
`;
const Container = styled.div`
  text-decoration: none;
  text-align: center;
`;
const Mid = styled.div`
  width: 150px;
  height: 130px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 3px;
  background: white;
  margin-top: 30px;
`;
const P = styled.div`
  display: block;
  font-size: 18px;
  font-family: AveriaSerif-Bold;
`;
const Head = styled.h4`
  font-size: 20px;
  margin-bottom: 40px;
  color: #cfcefd;
`;
const Span = styled.span`
  font-size: 16px;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Chartbar = () => {
  let { path } = useRouteMatch();
  const { filteredChartValues } = React.useContext(ChartValuesContext);

  const [values, setValues] = React.useState({
    orthoVisits: [0, 10],
    hospAdmissions: [0, 10],
    injections: [0, 10],
    ptVisits: [0, 10],
    success: { initialSurgery: 0, conservativeManagement: 0 },
    conSurg: 0,
  });
  React.useEffect(() => {
    setValues({
      orthoVisits: getAvgInitialSurgAndConservativeManagement(
        "Ortho_visits",
        filteredChartValues
      ),
      hospAdmissions: getAvgInitialSurgAndConservativeManagement(
        "Hosp_admissions",
        filteredChartValues
      ),
      injections: getAvgInitialSurgAndConservativeManagement(
        "Injections",
        filteredChartValues
      ),
      ptVisits: getAvgInitialSurgAndConservativeManagement(
        "PT_visits",
        filteredChartValues
      ),
      success: percentTreatmentSucsess(filteredChartValues),
      conSurg: getSum("Surg_conversion", filteredChartValues),
    });
  }, [filteredChartValues]);
  return (
    <>
      <CharBarContainer>
        <Div>
          <Buttons />
          <Switch>
            <Redirect exact from={path} to="/treatementComparators" />
            <Route exact path="/treatementComparators">
              <TreatementComparators />
            </Route>

            <Route exact path="/MeanOutcomeScores">
              <MeanOutcomeScores />
            </Route>

            <Route exact path="/healthcareUtilizationOutcomes">
              <HealthCareContainer>
                <FirstContainer>
                  <HealthcareUtilizationOutcomes
                    title={"Average Orthopardic Visits"}
                    value1={values?.orthoVisits[0]}
                    value2={values?.orthoVisits[1]}
                  />
                  <HealthcareUtilizationOutcomes
                    title={"Average Physical Therapy Visits"}
                    value1={values?.ptVisits[0]}
                    value2={values?.ptVisits[1]}
                  />
                </FirstContainer>
                <MiddleContainer>
                  <Container>
                    <p>
                      Percent Conversions<Tool data-tip="Conservative">i</Tool>{" "}
                      from Conservative management to Surgery in first 60 days
                    </p>
                    <Mid>
                      <P>
                        <Head>{values?.conSurg}%</Head>
                        <Span>Conversion Surgery</Span>
                      </P>
                    </Mid>
                  </Container>
                </MiddleContainer>

                <FirstContainer>
                  <HealthcareUtilizationOutcomes
                    title={"Average Shoulder Injections"}
                    value1={values?.injections[0]}
                    value2={values?.injections[1]}
                  />

                  <HealthcareUtilizationOutcomes
                    title={"Average Hospital Admissions"}
                    value1={values?.hospAdmissions[0]}
                    value2={values?.hospAdmissions[1]}
                  />
                </FirstContainer>
                <SucessRate value={values?.success} />
              </HealthCareContainer>
            </Route>
          </Switch>
        </Div>
      </CharBarContainer>
    </>
  );
};

export default Chartbar;
