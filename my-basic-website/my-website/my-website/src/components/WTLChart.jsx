import Chart from 'chart.js/auto'

import { Line } from "react-chartjs-2";

const WTLChart = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "% of Effort Available",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1
    }]
  };

  return (
    <div>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          responsive: false,
          scales: {
            x: {
              type: 'category'
            }
          }
        }}
      />
    </div>
  );
}

export default WTLChart;