import React from "react";

import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

import ChartValuesProvider from "./utils/Contexts/ChartValues";
import FontStyle from "./Font/FontStyle";
const App = () => {
  return (
    <ChartValuesProvider>
      <FontStyle />
      <Header />
      <Dashboard />
    </ChartValuesProvider>
  );
};

export default App;
