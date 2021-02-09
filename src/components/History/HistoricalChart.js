import React from 'react';

import { Bar } from 'react-chartjs-2'



const HistoricalChart = ({ historycalPerfomanceWorks }) => {
  const data = {
    labels: historycalPerfomanceWorks?.map(history => history.date),
    datasets: [
      {
        type: 'line',
        data: historycalPerfomanceWorks?.map(history => history.price),
        fill: false,
        borderDash: [5],
        borderColor: '#FFEBCC',
        pointBackgroundColor: '#FFEBCC',
        pointBorderWidth: '10px'
      },
    ],
  }

  const options = {

    events: false,
    tooltips: {
      enabled: false
    },
    hover: {
      animationDuration: 0
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = Chart.helpers.fontString('10px', Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          const meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            bar._yScale.margins.top = 10;
            let data = dataset.data[index];

            data = '$'  + data;
            ctx.fillStyle = '#fff'
            ctx.fillText(data, bar._model.x, bar._model.y - 10);
          });
        });
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          position: 'right',
          ticks: {
            fontColor: '#639DB7',
            beginAtZero: true,
            callback: function(value) {
              return '$' + value + 'M';
            }
          },
        },
      ],
    },
  }
  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}

export default HistoricalChart
