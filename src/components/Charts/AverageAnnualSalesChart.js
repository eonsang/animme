import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2'

const AverageAnnualSalesChart = ({ averageAnnualSales }) => {
  const [labels, setLabels] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [medium, setMedium] = useState([]);

  useEffect(() => {
    averageAnnualSales?.map(info => {
      setLabels(prevState => ([
        ...prevState,
        info.title
      ]));
      setData1(prevState => ([
        ...prevState,
        info['2018']
      ]));
      setData2(prevState => ([
        ...prevState,
        info['2019']
      ]))
      setMedium(prevState => ([
        ...prevState,
        info['medium']
      ]))
    })
  }, []);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: 'Medium',
            data: medium,
            borderDash: [2],
            borderColor: "#fff",
            backgroundColor: 'transparent',
            borderWidth: 2,
            order: 2
          },
          {
            label: '2018',
            data: data1,
            backgroundColor: '#FFEBCC',
            borderWidth: 0,
          },
          {
            label: '2019',
            data: data2,
            backgroundColor: '#C79B8F',
            borderWidth: 0,
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
            barThickness: 25,  // number (pixels) or 'flex'
            maxBarThickness: 25, // number (pixels)
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              fontColor: '#fff',
            }
          }],

          yAxes: [{
            position: 'left',
            ticks: {
              fontColor: '#639DB7',
              lineHeight: 3,
              callback: function(value) {
                return '$' + value + 'M';
              }
            }
          }],
        },
      }}
    />
  );
}

export default AverageAnnualSalesChart;
