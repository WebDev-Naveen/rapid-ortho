// import mockData from "../mockData.json";

export const percentTreatmentSucsess = (filteredValues) => {
  let initialSurgery = 0;
  let conservativeManagement = 0;
  let sumOfTrt_surg = 0;
  let sumOfTrt_conserv = 0;
  let trtSurgLength = 0;
  let trtConservLength = 0;
  filteredValues?.forEach((data) => {
    if (data.Trt_surg === 1) {
      sumOfTrt_surg += data.Trt_success;
      trtSurgLength++;
    }
    if (data.Trt_conserv === 1) {
      trtConservLength++;
      sumOfTrt_conserv += data.Trt_success;
    }
  });
  if (trtSurgLength && trtConservLength) {
    initialSurgery = ((sumOfTrt_surg * 100) / trtSurgLength).toFixed(2);

    conservativeManagement = (
      (sumOfTrt_conserv * 100) /
      trtConservLength
    ).toFixed(2);

    return {
      initialSurgery: Number(initialSurgery),
      conservativeManagement: Number(conservativeManagement),
    };
  } else {
    return {
      initialSurgery: 0,
      conservativeManagement: 0,
    };
  }
};
