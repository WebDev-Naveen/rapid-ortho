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
  const q1 = filteredValues.filter((data) => data.Quarter === "Q1");
  const q2 = filteredValues.filter((data) => data.Quarter === "Q2");
  const q3 = filteredValues.filter((data) => data.Quarter === "Q3");
  const q4 = filteredValues.filter((data) => data.Quarter === "Q4");

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

  return values;
};

export default getRateByMonth;
