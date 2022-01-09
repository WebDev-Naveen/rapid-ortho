import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Chartbar from "../../components/ChartBar/Chartbar";

const MainView = styled.main`
  padding: 0 15px;
  margin-bottom: 50px;
  h1 {
    text-align: center;
    width: 100%;
    font-family: "Poppins";

    margin: 10px;
  }
`;
const DashBoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Dashboard = () => {
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
