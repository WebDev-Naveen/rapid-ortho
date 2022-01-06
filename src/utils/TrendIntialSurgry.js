// import mockData from "../mockData.json";

const TrendIntialSurgry = (filteredValues, key) => {
  let sum = 0;
  let n = filteredValues.length;
  const rateByMonth = filteredValues.reduce((rate, val) => {
    if (val[key] === 1) {
      sum += val[key];
    }
    rate = (sum * 100) / n;
    return rate;
  }, 0);

  return rateByMonth.toFixed(2);
};

const getRateByMonth = (filteredValues, key) => {
  let values = [];
  let q1 = [];
  let q2 = [];
  let q3 = [];
  let q4 = [];
  filteredValues?.forEach((val) => {
    if (val.Quarter === "Q1") {
      q1.push(val);
    } else if (val.Quarter === "Q2") {
      q2.push(val);
    } else if (val.Quarter === "Q3") {
      q3.push(val);
    } else {
      q4.push(val);
    }
  });

  for (let i = 1; i <= 4; i++) {
    switch (i) {
      case 1:
        values.push(TrendIntialSurgry(q1, key));
        break;
      case 2:
        values.push(TrendIntialSurgry(q2, key));
        break;
      case 3:
        values.push(TrendIntialSurgry(q3, key));
        break;
      case 4:
        values.push(TrendIntialSurgry(q4, key));
        break;
      default:
        console.log(i);
    }
  }
  if (values.length > 0) {
    return values;
  } else {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
};

export default getRateByMonth;
