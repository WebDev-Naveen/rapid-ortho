import React from "react";
import styled from "styled-components";
import StackBar from "../StackBar/StackBar";
import RangeOfMotion from "../StackBar/RangeOfMotion";
import PromiseScores from "./PromiseScores";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";
import { getAvgInitialSurgAndConservativeManagement } from "../../utils/getAvgInitialSurgAndConservativeManagement";
import ProgressChart from "./ProgressChart";
import ReactTooltip from "react-tooltip";

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
const Style1 = styled.div`
  margin-top: 10px;
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
  padding-left: 5px;
  padding-right: 5px;
  background-color: #5cdafe;
  border-radius: 50%;
  margin-left: 2px;
  margin-top: -50px;
  color: white;
  font-size: 8px;
`;

const LineBar = () => {
  const { filteredChartValues } = React.useContext(ChartValuesContext);
  const [promisScore, setPromisScore] = React.useState({
    promisInitial: [0, 1],
    promisConserv: [0, 1],
  });
  const [stackBarValues, setStackBarValues] = React.useState({
    sane: [1, 2, 3, 4, 5, 6, 7, 8],
    constant: [2, 10, 32, 43, 54, 65, 76, 85],
  });

  const [forwardFlexion, setForwardFlexion] = React.useState({
    forwardInitial: [0, 1],
    forwardConserv: [0, 1],
  });
  const [rangeMotion, setRangeMotion] = React.useState({
    rangeInitial: [0, 1],
    rangeConserv: [0, 1],
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

    months.forEach((m) => {
      const forwardVal = getAvgInitialSurgAndConservativeManagement(
        `FwdFlex_${m}`,
        filteredChartValues
      );
      forwardConservValues.push(forwardVal[1]);
      forwardIntialValues.push(forwardVal[0]);
      // const forwardVal = getAvgInitialSurgAndConservativeManagement(
      //   `FwdFlex_${m}`,
      //   filteredChartValues
      // );
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
      forwardInitial: forwardIntialValues.flat(),
      forwardConserv: forwardConservValues.flat(),
    });
    setRangeMotion({
      rangeInitial: rangeInitialValues.flat(),
      rangeConserv: rangeConservValues.flat(),
    });

    setPromisScore({
      promisInitial: promisInitalValues.flat(),
      promisConserv: promiseConservValues.flat(),
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
        <ReactTooltip />
      </div>

      <div className="progress">
        <Par>
          Pain Scores
          <ReactTooltip />
          <Tool data-tip="Conservative">i</Tool>
        </Par>
        <Prog>Three Months</Prog>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          {" "}
          <ProgressChart bgcolor="#A3A1FB" progress="20" height={15} />
        </Style>
        <Style1>
          {" "}
          <ProgressChart bgcolor="#5CDAFE" progress="20" height={15} />
        </Style1>

        <Prog>Six Months</Prog>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          <ProgressChart bgcolor="#A3A1FB" progress="20" height={15} />
        </Style>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          {" "}
          <ProgressChart bgcolor="#5CDAFE" progress="20" height={15} />
        </Style>

        <Prog>One Year</Prog>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          {" "}
          <ProgressChart bgcolor="#A3A1FB" progress="20" height={15} />
        </Style>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          {" "}
          <ProgressChart bgcolor="#5CDAFE" progress="20" height={15} />
        </Style>

        <Prog>Two Year</Prog>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          {" "}
          <ProgressChart bgcolor="#A3A1FB" progress="20" height={15} />
        </Style>
        <Span>0</Span>
        <Span1>5</Span1>
        <Span1>10</Span1>
        <Style>
          <ProgressChart bgcolor="#5CDAFE" progress="20" height={15} />
        </Style>
      </div>

      <div className="promise">
        <P>
          PROMIS-PF Scores
          <ReactTooltip />
          <Tool data-tip="Conservative">i</Tool>
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
