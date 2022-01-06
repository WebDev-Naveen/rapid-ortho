import React, { useContext } from "react";
import styled from "styled-components";
import RadioButton from "./RadioButton";
import FractureCharacterstics from "./FractureCharacterstics";
import RangeBar from "../../components/RangeBar.jsx/RangeBar";
import { useForm, FormProvider, Controller } from "react-hook-form";

import { ChartValuesContext } from "../../utils/Contexts/ChartValues";
import SwitchToggleWithTitle from "../../components/SwitchToggle/SwitchToggleWithTitle";
import ReactTooltip from "react-tooltip";

const SideBarContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;

  font-family: "Poppins";
`;

const Div = styled.div`
  width: 100%;
  border-radius: 3px;
  background: white;
  padding: 1px;
  margin-bottom: 20px;
`;
const P = styled.p`
  font-size: 14px;
  margin: 16px 20px;
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 16px;
  text-align: center;
  font-family: "PoppinsSemiBold";
  margin-top: 16px;
`;
const Head = styled.div`
  font-size: 16px;
  text-align: center;
  font-family: "PoppinsSemiBold";
  border-bottom: 1px solid #d4d7db;
  margin: 0 16px;
  padding-bottom: 8px;
  padding-top: 5px;
`;

const RangeBarContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;

  width: 95%;
  height: 70px;
  margin: 0 auto;
  margin-top: 20px;

  border-bottom: 1px solid #d4d7db;
`;

const ToggleBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  font-size: 16px;
  margin: 0 auto;
  border-bottom: 1px solid #d4d7db;

  height: 70px;

  align-items: center;
`;

const FormContainer = styled.form`
  width: 650px;
  display: flex;
  flex-direction: column;

  overflow: auto;
`;

const RangeBarHead = styled.div`
  margin-left: 16px;
  margin-top: 16px;
`;

const RangeBarContainerDesc = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const SideFooter = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  height: 50px;
  margin-top: 5px;
  background: white;
  font-size: 21px;
  padding-top: 10px;
  text-align: center;
  font-weight: bold;
`;

const Title = styled.div`
  width: 65%;
  text-align: right;
  margin-right: 10px;
`;

const Toggle = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Tool = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  background-color: #5cdafe;
  border-radius: 50%;
  place: top;

  color: white;
  font-size: 12px;
`;

const SideBar = () => {
  const { setFilterValues, filteredChartValues } =
    useContext(ChartValuesContext);

  const methods = useForm({
    defaultValues: {
      Male: 1,
    },
  });
  const { watch, control, getValues } = methods;

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
        <SideBarContainer>
          <Div>
            <H1>Patient Search Criteria</H1>
            <P>
              Using the sliders and toggle buttons below, apply filters that
              match the target patient profile. You can apply as many or as few
              filters as you'd like. will automatically be displayed in the
              middle pane.
            </P>
          </Div>
          <Div>
            <Head>Patient Demographics</Head>
            <RangeBarHead>Patient Age (Years)</RangeBarHead>
            <RangeBarContainer>
              <RangeBarContainerDesc>
                <Controller
                  name="Age.min"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <RangeBar
                      max={"30"}
                      min={"0"}
                      name="min"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <span style={{ position: "absolute", top: "20px" }}>0</span>
              </RangeBarContainerDesc>
              <div className="blocker"></div>
              <RangeBarContainerDesc>
                <Controller
                  name="Age.max"
                  control={control}
                  defaultValue={40}
                  render={({ field }) => (
                    <RangeBar
                      max={"110"}
                      min={"40"}
                      name="max"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <span
                  style={{ position: "absolute", left: "92%", top: "20px" }}
                >
                  110
                </span>
              </RangeBarContainerDesc>
              {/* <RangeBar max={100} min={40} name="max" /> */}
            </RangeBarContainer>
            <RadioButton />
          </Div>

          <Div>
            <Head> Fracture Characteristic</Head>

            <FractureCharacterstics />
          </Div>
          <Div>
            <Head>Patient Comorbidities</Head>
            <ToggleBar>
              <Toggle style={{ width: "45%" }}>
                <Title style={{ width: "60%" }}>History Of Falls</Title>
                <SwitchToggleWithTitle name={"History_falls"} />
              </Toggle>
              <Toggle>
                <Title>Dementia</Title>
                <SwitchToggleWithTitle name={"Dementia"} />
              </Toggle>
            </ToggleBar>
            <ToggleBar>
              <Toggle style={{ width: "45%" }}>
                <Title style={{ width: "60%" }}>Diabetes</Title>
                <SwitchToggleWithTitle name={"Diabetes"} />
              </Toggle>
              <Toggle>
                <Title>Osteoarthritis</Title>
                <SwitchToggleWithTitle name={"Osteoarthritis"} />
              </Toggle>
            </ToggleBar>
            <ToggleBar>
              <Toggle style={{ width: "45%" }}>
                <Title style={{ width: "60%" }}>Live at home</Title>
                <ReactTooltip />
                <Tool data-tip="Conservative">i</Tool>
                <SwitchToggleWithTitle name={"Live_at_home"} />
              </Toggle>
              <Toggle>
                <Title>Frail</Title>
                <ReactTooltip />
                <Tool data-tip="Conservative">i</Tool>
                <SwitchToggleWithTitle name={"Frail"} />
              </Toggle>
            </ToggleBar>
          </Div>
          <SideFooter>{`N=${filteredChartValues?.length} patients found in the matched cohort`}</SideFooter>
        </SideBarContainer>
      </FormContainer>
    </FormProvider>
  );
};

export default SideBar;
/*


 


 
*/
