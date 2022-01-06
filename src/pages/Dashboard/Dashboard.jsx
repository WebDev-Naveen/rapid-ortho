import React, { useContext } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Chartbar from "../../components/ChartBar/Chartbar";
import { getAvgInitialSurgAndConservativeManagement } from "../../utils/getAvgInitialSurgAndConservativeManagement";
import { percentTreatmentSucsess } from "../../utils/percentTreatmentSuccess";
import { getSum } from "../../utils/getSum";
import { getHighVolume } from "../../utils/getHighVolume";
import { getHistory } from "../../utils/getHistory";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";

const MainView = styled.main`
  padding: 0 15px;
  margin-bottom: 50px;
  h1 {
    text-align: center;
    width: 100%;
    font-family: "PoppinsSemiBold";

    margin: 10px;
  }
`;
const DashBoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Dashboard = () => {
  const { filteredChartValues } = useContext(ChartValuesContext);
  console.log("asdfasdf", filteredChartValues);
  React.useEffect(() => {
    getAvgInitialSurgAndConservativeManagement("VAPS_3m", filteredChartValues);
    getAvgInitialSurgAndConservativeManagement("VAPS_6m", filteredChartValues);
    getAvgInitialSurgAndConservativeManagement("VAPS_12m", filteredChartValues);
    getAvgInitialSurgAndConservativeManagement("VAPS_24m", filteredChartValues);
  }, [filteredChartValues]);
  return (
    <MainView>
      <h1>
        Information System for Comparative Effectiveness Decision for
        Individualized Treatment
      </h1>
      <DashBoardContainer>
        <SideBar />
        <Chartbar />
      </DashBoardContainer>
    </MainView>
  );
};

export default Dashboard;
