// import mockData from "../mockData.json";

export const getAvgInitialSurgAndConservativeManagement = (
  key,
  filteredValues
) => {
  let initialSurgery = 0;
  let conservativeManagement = 0;
  let sumOfTrt_surg = 0;
  let sumOfTrt_conserv = 0;
  let trtSurgLength = 0;
  let trtConservLength = 0;
  filteredValues?.forEach((data) => {
    if (data.Trt_surg === 1) {
      trtSurgLength++;
      sumOfTrt_surg += data[key];
    }
    if (data.Trt_conserv === 1) {
      sumOfTrt_conserv += data[key];
      trtConservLength++;
    }
  });

  initialSurgery = (sumOfTrt_surg / trtSurgLength).toFixed(2);

  conservativeManagement = (sumOfTrt_conserv / trtConservLength).toFixed(2);

  return [Number(initialSurgery), Number(conservativeManagement)];
};
