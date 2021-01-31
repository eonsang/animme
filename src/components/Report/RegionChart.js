import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2'

const RegionChart = ({ lastDecadeAuctionInfo }) => {
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    lastDecadeAuctionInfo.map(info => {
      setLabels(prevState => ([
        ...prevState,
        info.auction
      ]));
      setPrices(prevState => ([
        ...prevState,
        info.price
      ]));
      setCounts(prevState => ([
        ...prevState,
        info.cnt
      ]))
    })
  }, []);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: 'price',
            data: prices,
            yAxisID: 'A',
            backgroundColor: '#AB7B6D',
            borderWidth: 0,
          },

          {
            label: 'count',
            data: counts,
            yAxisID: 'B',
            backgroundColor: '#DCB8AE',
            borderWidth: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            barThickness: 25,  // number (pixels) or 'flex'
            maxBarThickness: 25, // number (pixels)
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          yAxes: [{
            display: false,
            id: 'A',
            position: 'left',
            gridLines: {
              display: false,
            },
            ticks: {
              callback: function(value) {
                return '$' + value + 'M';
              }
            }
          }, {
            display: false,
            id: 'B',
            position: 'right',
            gridLines: {
              display: false,
            },
          }],
        },
      }}
    />
  );
}

export default RegionChart;
