import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController
} from 'chart.js';
import './App.css';
import Chart from './Chart';
import InfoBox from './InfoBox';
import Controls from './Controls';
import {
  fetchAreas,
  fetchSpectrumAreaData,
  fetchSpectrumInfo
} from './requests';
import {
  Area,
  SpectrumInfo,
  SpectrumData
} from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController
);

let AREAS: Area[]|null = null;
let SPECTRUM_INFO: SpectrumInfo|null= null;

const DEFAULT_AREAS: Area[] = [];
const DEFAULT_CHART_DATA: SpectrumData = [];
const DEFAULT_INFO: SpectrumInfo = { id: '', date: '' };

const App = () => {
  const [ areas, setAreas ] = useState(DEFAULT_AREAS);
  const [ chartData, setChartData ] = useState(DEFAULT_CHART_DATA);
  const [ info, setInfo ] = useState(DEFAULT_INFO);
  const [ activeArea, setActiveArea ] = useState(0);

  useEffect(() => {
    (async () => {
      if (!SPECTRUM_INFO) {
        SPECTRUM_INFO = await fetchSpectrumInfo();
        setInfo(SPECTRUM_INFO || DEFAULT_INFO);
      }

      if (!AREAS) {
        AREAS = await fetchAreas();
        setAreas(AREAS || DEFAULT_AREAS);
      }
    })();
  }, []);

  const handleControlClick = (controlId: number) => {
    setActiveArea(controlId);

    fetchSpectrumAreaData(controlId)
      .then((res) => {
        setChartData(res);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="info-wrapper">
          <InfoBox heading={"ID"} value={info.id} />
          <InfoBox heading={"Date"} value={info.date} />
        </div>
        <div className="chart">
          <Controls onClick={handleControlClick} values={areas} active={activeArea} />
          <Chart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default App;
