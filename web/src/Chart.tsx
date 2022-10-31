import { ChartOptions } from 'chart.js';
import { Chart as ChartJSChart } from 'react-chartjs-2';
import { Point } from './types';

type ChartProps = {
  data: Point[]
};

const Chart = (props: ChartProps) => {
  const labels = props.data.map((point) => point.x.toFixed(1));

  const data = {
    labels: labels,
    datasets: [
      {
        data: props.data.map((point) => point.y),
        backgroundColor: '#6203df',
        borderColor: '#6203df',
      }
    ]
  };

  const options: ChartOptions = {
    scales: {
      x: {
        ticks: {
          callback: function (value, index, ticks) {
            const label = this.getLabelForValue(Number(value));

            if (index === 0) return label;
            if (index === ticks.length - 1) return label;

            const previous = this.getLabelForValue(Number(ticks[index - 1].value));

            if (label === previous) return null;

            return label;
          }
        }
      }
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  const drawLineChart = () => {
    return <ChartJSChart type="line" options={options} data={data} />
  };

  return (
    <div>
      { drawLineChart() }
    </div>
  );
};

export default Chart;
