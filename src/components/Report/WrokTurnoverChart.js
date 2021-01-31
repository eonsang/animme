import React from 'react';
import { Bar } from 'react-chartjs-2';

function randomValue() {
  return Math.floor(Math.random() * 100);
}
const data = {

  labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      data: [
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue()
      ],
      backgroundColor: [
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
      ],
      borderWidth: 0,
    },
  ],
}

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: function(value) {
            return value + '%';
          }
        },
      },
    ],
  },
}

const WrokTurnoverChart = () => (
  <>
    <Bar data={data} options={options} />
  </>
)

export default WrokTurnoverChart;
