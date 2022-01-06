// import mockData from "../mockData.json";

export const getSum = (key, filteredValues) => {
  let rate = 0;
  let sum = 0;
  const n = filteredValues?.length;

  filteredValues?.forEach((data) => {
    if (data[key] === 1) {
      sum += data[key];
    }
  });
  if (n) {
    rate = ((sum * 100) / n).toFixed(2);

    return rate;
  } else {
    return 0;
  }
};
