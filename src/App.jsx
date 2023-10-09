// App.js
import React, { useState } from 'react';
import ChartConfigurator from './components/ChartConfigurator';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [charts, setCharts] = useState([]);
  const [createdCharts, setCreatedCharts] = useState([]);

  const handleChartCreation = (chartType) => {
    setCharts((prev) => [...prev, chartType]);
  };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="h-[60px] px-8 bg-[#8099c7] text-white flex justify-between items-center">
        <h1 className="text-2xl">Data Visualization Dashboard</h1>
        <ChartConfigurator
          createdCharts={createdCharts}
          setCreatedCharts={setCreatedCharts}
          onChartCreation={handleChartCreation}
        />
      </header>
      <Dashboard charts={charts} createdCharts={createdCharts} />
    </div>
  );
}

export default App;
