import React, { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import mockData from "../../mockData.json";

export const ChartValuesContext = createContext({});

function ChartValuesProvider(props) {
  const [filterValues, setFilterValues] = useState({});
  const [filteredChartValues, setFilteredChartValues] = useState([]);

  const getChartValues = React.useCallback(() => {
    const filter = { ...filterValues };
    const length = Object.keys(filter).length;
    let values = [];

    mockData.forEach((data) => {
      let filterTrueCount = 0;
      for (let i in filterValues) {
        if (i in data) {
          if (i !== "Age") {
            if (filter[i] === data[i]) {
              filterTrueCount = filterTrueCount + 1;
            }
          }
          if (i === "Age") {
            if (
              data["Age"] <= filterValues?.Age?.max &&
              data["Age"] >= filterValues?.Age?.min
            ) {
              filterTrueCount++;
            }
          }
        }
      }

      if (filterTrueCount === length) {
        values.push(data);
      }
    });
    return values;
  }, [filterValues]);

  useEffect(() => {
    // setFilteredChartValues(getChartValues);
    setFilteredChartValues(mockData);
  }, []);

  return (
    <ChartValuesContext.Provider
      value={{ filterValues, setFilterValues, filteredChartValues }}
    >
      {props.children}
    </ChartValuesContext.Provider>
  );
}

export default ChartValuesProvider;
