// import mockData from "../mockData.json";

export const getHistory = (filteredValues) => {
  let totalPatient = 0;
  let sumTrt_Surg = 0;
  let sumTrt_conserv = 0;
  filteredValues?.forEach((data) => {
    if (data["Managing physician"] === "Schooley") {
      totalPatient++;

      if (data.Trt_surg === 1) {
        sumTrt_Surg++;
      }
      if (data.Trt_conserv === 1) {
        sumTrt_conserv++;
      }
    }
  });

  const intialSurgery = ((sumTrt_Surg * 100) / totalPatient).toFixed(2);
  const conservationManagement = (
    (sumTrt_conserv * 100) /
    totalPatient
  ).toFixed(2);

  return [Number(intialSurgery), Number(conservationManagement)];
};
