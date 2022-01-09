import React from "react";
import styled from "styled-components";
import StackBar from "../StackBar/StackBar";
import RangeOfMotion from "../StackBar/RangeOfMotion";
import PromiseScores from "./PromiseScores";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";
import { getAvgInitialSurgAndConservativeManagement } from "../../utils/getAvgInitialSurgAndConservativeManagement";
import ProgressChart from "./ProgressChart";
import ReactTooltip from 'react-tooltip';
import img1 from "../../assets/images/icon.ico";

const PromisContainer = styled.div`
  display: flex;

  justify-content: space-between;
  width: 60%;
  /* height: 700px; */

  margin-left: 5%;
`;
const Container = styled.div``;
const Par = styled.p`
  padding: 1px;
  margin-left: 15px;
  text-align: center;
  text-decoration: none;
  font-family: PoppinsSemiBold;
`;
const Style = styled.div`
  margin-left: 20px;
`;

const Prog = styled.p`
  margin-left: 20px;
  margin-top: 10px;
`;
const P = styled.p`
  text-align: center;
  text-decoration: none;
  font-family: PoppinsSemiBold;
`;
const Span = styled.span`
  font-size: 16px;
  margin-left: 20px;
`;
const Span1 = styled.span`
  font-size: 16px;
  margin-left: 150px;
`;
const Tool = styled.span`
 margin-left: 5px;
 margin-top: 5px;
 
`;

const LineBar = () => {
  const { filteredChartValues } = React.useContext(ChartValuesContext);
  const [promisScore, setPromisScore] = React.useState({
    promisInitial: [0, 1, 3, 5],
    promisConserv: [0, 1, 3, 5],
  });
  const [painScores, setPainScores] = React.useState({
    painInitial: [0, 1, 3, 5],
    painConserv: [0, 1, 3, 5],
  });
  const [stackBarValues, setStackBarValues] = React.useState({
    sane: [1, 2, 3, 4, 5, 6, 7, 8],
    constant: [2, 10, 32, 43, 54, 65, 76, 85],
  });

  const [forwardFlexion, setForwardFlexion] = React.useState({
    forwardInitial: [0, 1, 3, 5],
    forwardConserv: [0, 1, 3, 5],
  });
  const [rangeMotion, setRangeMotion] = React.useState({
    rangeInitial: [0, 1, 3, 5],
    rangeConserv: [0, 1, 3, 5],
  });

  React.useEffect(() => {
    const months = ["3m", "6m", "12m", "24m"];
    let saneValues = [];
    let constantValues = [];
    let forwardIntialValues = [];
    let forwardConservValues = [];
    let rangeInitialValues = [];
    let rangeConservValues = [];
    let promisInitalValues = [];
    let promiseConservValues = [];
    let painInitalValues = [];
    let painConservValues = [];
    months.forEach((m) => {
      const forwardVal = getAvgInitialSurgAndConservativeManagement(
        `FwdFlex_${m}`,
        filteredChartValues
      );
      forwardConservValues.push(forwardVal[1]);
      forwardIntialValues.push(forwardVal[0]);
      const painVal = getAvgInitialSurgAndConservativeManagement(
        `VAPS_${m}`,
        filteredChartValues
      );
      painInitalValues.push(painVal[0]);
      painConservValues.push(painVal[1]);

      const rangeVal = getAvgInitialSurgAndConservativeManagement(
        `Abduction_${m}`,
        filteredChartValues
      );
      rangeInitialValues.push(rangeVal[0]);
      rangeConservValues.push(rangeVal[1]);

      const promisVal = getAvgInitialSurgAndConservativeManagement(
        `PROMISPF_${m}`,
        filteredChartValues
      );
      promisInitalValues.push(promisVal[0]);
      promiseConservValues.push(promisVal[1]);
      saneValues.push(
        getAvgInitialSurgAndConservativeManagement(
          `SANE_${m}`,
          filteredChartValues
        )
      );
      constantValues.push(
        getAvgInitialSurgAndConservativeManagement(
          `Constant_${m}`,
          filteredChartValues
        )
      );
    });
    setStackBarValues({
      sane: saneValues.flat(),
      constant: constantValues.flat(),
    });
    setForwardFlexion({
      forwardInitial: forwardIntialValues,
      forwardConserv: forwardConservValues,
    });
    setRangeMotion({
      rangeInitial: rangeInitialValues,
      rangeConserv: rangeConservValues,
    });

    setPromisScore({
      promisInitial: promisInitalValues,
      promisConserv: promiseConservValues,
    });
    setPainScores({
      painInitial: painInitalValues,
      painConserv: painConservValues,
    });
  }, [filteredChartValues]);

  return (
    <div className="wrapper">
      <div className="stackBar">
      
        <StackBar text={"Sane & constant Scores"} value={stackBarValues} />
      </div>
      <div className="forword">
        <RangeOfMotion
          text={"Forward Flexion (Degrees)"}
          series={[
            {
              name: "Sane",
              data: forwardFlexion?.forwardInitial,
            },
            {
              name: "Constant",
              data: forwardFlexion?.forwardConserv,
            },
          ]}
        />
      </div>
      <div className="range">
        <RangeOfMotion
          text={"Range Of Motion (Degrees)"}
          series={[
            {
              name: "Sane",
              data: rangeMotion?.rangeInitial,
            },
            {
              name: "Constant",
              data: rangeMotion?.rangeConserv,
            },
          ]}
        />
        
      </div>

      <div className="progress">
        <Par>
          Pain Scores
          <ReactTooltip />
          <Tool data-tip="Conservative">
          <img src={img1} alt="ToolTip" width="15px" height="15px"/>
          </Tool>
        </Par>
        {painScores?.painInitial.map((val, index) => (
          <React.Fragment key={index}>
            <Prog>
              {index === 0
                ? "Three Months"
                : index === 1
                ? "Six Months"
                : index === 2
                ? "One Year"
                : "Two Years"}
            </Prog>
            <Span>0</Span>
            <Span1>5</Span1>
            <Span1>10</Span1>
            <Style>
              <ProgressChart
                bgcolor="#A3A1FB"
                progress={`${val.toFixed(0)}`}
                height={15}
              />
            </Style>
            <Span>0</Span>

            <Span1 style={{ marginLeft: "310px" }}>10</Span1>
            <Style>
              <ProgressChart
                bgcolor="#5CDAFE"
                progress={`${painScores?.painConserv[index].toFixed(0)}`}
                height={15}
              />
            </Style>
          </React.Fragment>
        ))}

    
      </div>

      <div className="promise">
        <P>
          PROMIS-PF Scores
          <ReactTooltip />
          <Tool data-tip="PROMIS-PF Scores">
          <img src={img1} alt="ToolTip" width="15px" height="15px"/>
          </Tool>
        </P>
        <PromisContainer>
          <Container>
            <PromiseScores
              year={"Three Months"}
              value={{
                initalSurg: promisScore?.promisInitial[0],
                conserv: promisScore?.promisConserv[0],
              }}
            />
            <PromiseScores
              year={"Six Months"}
              value={{
                initalSurg: promisScore?.promisInitial[1],
                conserv: promisScore?.promisConserv[1],
              }}
            />
          </Container>
          <Container>
            <PromiseScores
              year={"One Year"}
              value={{
                initalSurg: promisScore?.promisInitial[2],
                conserv: promisScore?.promisConserv[2],
              }}
            />
            <PromiseScores
              year={"Two Year"}
              value={{
                initalSurg: promisScore?.promisInitial[3],
                conserv: promisScore?.promisConserv[3],
              }}
            />
          </Container>
        </PromisContainer>
      </div>
    </div>
  );
};

export default LineBar;
