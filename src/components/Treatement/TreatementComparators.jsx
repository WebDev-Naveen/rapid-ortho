import React, { useContext } from "react";
import styled from "styled-components";
import HalfDonutChart from "../ChartBar/HalfDonutChart";
import DonutChart from "../ChartBar/DonutChart";
import AreaChart from "./AreaChart";
import { getSum } from "../../utils/getSum";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";
import { getHistory } from "../../utils/getHistory";
import { getHighVolume } from "../../utils/getHighVolume";
import ReactTooltip from "react-tooltip";
import img1 from "../../assets/images/icon.ico";

const MainContainer = styled.div`
  background: #fff;
  padding-bottom: 20px;
`;

const HalfChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const FirstContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 5px;
`;
const P1 = styled.p`
  display: block;
  font-size: 16px;
  padding: 5px;
  text-align: center;
`;
const AreaChartContainer = styled.div`
  display: flex;
  margin-left: 50px;
`;
const SecondContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 950px;
  margin: 10px;
  margin-left: 80px;
`;

const DonutChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
//const AreaChartContainer = styled(HalfChartContainer)``;

const ThirdContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 10px;
  width: 400px;
`;
const P3 = styled.p`
  display: block;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`;
const P = styled.p`
  display: block;
  font-size: 16px;
  padding: 10px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 20px;
  text-align: center;
`;
const Tool = styled.span``;



const TreatementComparators = () => {
  const { filteredChartValues } = useContext(ChartValuesContext);

  const [donutValue, setDonutValue] = React.useState({
    historyRate: [0, 10],
    volumeRate: [0, 10],
  });
  const [rate, setRate] = React.useState({
    initialSurg: 0,
    conservManagement: 0,
  });
  React.useEffect(() => {
    setRate({
      initialSurg: getSum("Trt_surg", filteredChartValues),
      conservManagement: getSum("Trt_conserv", filteredChartValues),
    });
    setDonutValue({
      historyRate: getHistory(filteredChartValues),
      volumeRate: getHighVolume(filteredChartValues),
    });
  }, [filteredChartValues]);

  return (
    <MainContainer>
      <HalfChartContainer>
        <FirstContainer>
          <P1>
            Initial Surgery Rate <ReactTooltip />
            <img
              src={img1}
              alt="ToolTip"
              width="15px"
              height="15px"
              data-tip
              data-for="sad"
            />
            <ReactTooltip id="sad" className="Tooltip" type="dark" place="bottom" effect="solid">
              <span>
                Early or Intial Surgery is <br></br> defined as patients
                receiving surgical treatment<br></br> within 30 days of
                diagnosis
              </span>
            </ReactTooltip>
          </P1>

          <HalfDonutChart
            colors={["#FF8373", "#F0F2F8"]}
            rate={rate?.initialSurg}
          />
        </FirstContainer>
        <FirstContainer>
          <P1>
            Initial-Conservative Management Rate
            <ReactTooltip />
             <img
              src={img1}
              alt="ToolTip"
              width="15px"
              height="15px"
              data-tip
              data-for="sadjk"
            />
            <ReactTooltip id="sadjk" className="Tooltip" type="dark" place="bottom" effect="solid">
              <span>
                Conservative Treatement is <br></br> defined as patients
                receiving surgical treatment<br></br> within 30 days of
                diagnosis
              </span>
            </ReactTooltip>
           
          </P1>
         
         
          <HalfDonutChart
            colors={["#FFDA83", "#F0F2F8"]}
            rate={rate?.conservManagement}
          />
        </FirstContainer>
      </HalfChartContainer>

      <P>Trend in Initial Surgery Rate Over Time</P>
      <AreaChartContainer>
        <SecondContainer>
          <AreaChart />
        </SecondContainer>
      </AreaChartContainer>
      <P>Physician-level Treatment Rate Variation</P>
      <DonutChartContainer>
        <ThirdContainer>
          <P3>My historical practice patterns</P3>
          <DonutChart value={donutValue?.historyRate} />
        </ThirdContainer>
        <ThirdContainer>
          <P3>
            High-Volume physicians'
            <ReactTooltip />
            <Tool data-tip="Conservative">
              <img src={img1} alt="ToolTip" width="15px" height="15px" />
            </Tool>
            'historical practice patterns
          </P3>
          <DonutChart value={donutValue?.volumeRate} />
        </ThirdContainer>
      </DonutChartContainer>
    </MainContainer>
  );
};

export default TreatementComparators;
