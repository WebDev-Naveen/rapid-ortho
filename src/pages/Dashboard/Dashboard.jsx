import React, { useContext } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Chartbar from "../../components/ChartBar/Chartbar";
import { useForm, FormProvider } from "react-hook-form";
import { ChartValuesContext } from "../../utils/Contexts/ChartValues";

const FormContainer = styled.form`
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
  const { setFilterValues } = useContext(ChartValuesContext);

  const methods = useForm({
    defaultValues: {
      Male: 2,
    },
  });
  const { watch, getValues } = methods;

  React.useEffect(() => {
    const subscription = watch((value) => {
      setFilterValues(value);
    });

    return () => subscription.unsubscribe();
  }, [watch, setFilterValues]);

  React.useEffect(() => {
    setFilterValues(getValues());
  }, [getValues, setFilterValues]);
  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h1>
          Information System for Comparative Effectiveness Decision for
          Individualized Treatment
        </h1>
        <DashBoardContainer>
          <SideBar />
          <Chartbar />
        </DashBoardContainer>
      </FormContainer>
    </FormProvider>
  );
};

export default Dashboard;
