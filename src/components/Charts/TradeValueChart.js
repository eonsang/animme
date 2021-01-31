import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2'

const TradeValueChart = ({ tradeVolumesSector }) => {
  const [labels, setLabels] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    tradeVolumesSector.map(info => {
      setLabels(prevState => ([
        ...prevState,
        info.year
      ]));
      setData1(prevState => ([
        ...prevState,
        info['value']
      ]));
      setData2(prevState => ([
        ...prevState,
        info['volume']
      ]))
    })
  }, []);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            yAxisID: 'A',
            label: 'Value',
            data: data1,
            backgroundColor: '#FFEBCC',
            borderWidth: 0,
          },
          {
            yAxisID: 'B',
            label: 'Volume',
            type: 'line',
            borderDash: [2],
            data: data2,
            borderColor: "#fff",
            backgroundColor: 'transparent',
            borderWidth: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          align: 'end',
          labels: {
            defaultFontColor: '#fff',
            fontColor: "#fff",
          }
        },
        scales: {
          xAxes: [{
            barThickness: 30,  // number (pixels) or 'flex'
            maxBarThickness: 30, // number (pixels)
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }],
          yAxes: [{
            id: 'A',
            position: 'left',
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: '#639DB7',
              lineHeight: 3,
              z: 1,
              callback: function(value) {
                return '$' + value + 'M';
              }
            }
          }, {
            id: 'B',
            position: 'right',
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: '#639DB7',
              lineHeight: 3,
              z: 2,
            }
          }],
        },
      }}
    />
  );
}

export default TradeValueChart;