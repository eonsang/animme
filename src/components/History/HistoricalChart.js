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
