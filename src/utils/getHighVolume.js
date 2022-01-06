const getTopThreeProviders = (managingPersonOccurrence) => {
  let max = 0;
  let maxPhysicianName = "";
  Object.keys(managingPersonOccurrence).forEach((e) => {
    if (managingPersonOccurrence[e] > max) {
      max = managingPersonOccurrence[e];
      maxPhysicianName = e;
    }
  });
  return maxPhysicianName;
};
export const getHighVolume = (filteredValues) => {
  let managingPersonOccurrence = {};
  let maxPhysicianName = [];
  let sumTrt_surg = 0;

  let sumTrt_conserv = 0;
  let sumOfPatientTopProviders = 0;
  filteredValues?.forEach((data) => {
    if (managingPersonOccurrence[data["Managing physician"]] === undefined) {
      managingPersonOccurrence[data["Managing physician"]] = 1;
    } else {
      managingPersonOccurrence[data["Managing physician"]] += 1;
    }
  });

  const name = getTopThreeProviders(managingPersonOccurrence);

  maxPhysicianName.push(name);

  delete managingPersonOccurrence[name];

  filteredValues?.forEach((data) => {
    if (
      data["Managing physician"] === maxPhysicianName[0] ||
      data["Managing physician"] === maxPhysicianName[1] ||
      data["Managing physician"] === maxPhysicianName[2]
    ) {
      sumOfPatientTopProviders++;
      if (data.Trt_surg === 1) {
        sumTrt_surg++;
      }
      if (data.Trt_conserv === 1) {
        sumTrt_conserv++;
      }
    }
  });
  if (sumOfPatientTopProviders) {
    const initialSurgery = (
      (sumTrt_surg * 100) /
      sumOfPatientTopProviders
    ).toFixed(2);
    const conservationManagement = (
      (sumTrt_conserv * 100) /
      sumOfPatientTopProviders
    ).toFixed(2);
    return [Number(initialSurgery), Number(conservationManagement)];
  }
  else {
    return [0, 0];
  }
};
