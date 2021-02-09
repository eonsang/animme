import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Bar} from 'react-chartjs-2'

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const RegionChart = ({ lastDecadeAuctionInfo }) => {
  const [width] = useWindowSize();
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [counts, setCounts] = useState([]);


  useEffect(() => {
    lastDecadeAuctionInfo?.map(info => {
      setLabels(prevState => ([
        ...prevState,
        info.auction
      ]));
      setPrices(prevState => ([
        ...prevState,
        parseFloat(info.price.slice(0, -1), 10)
      ]));
      setCounts(prevState => ([
        ...prevState,
        info.cnt
      ]))
    })
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        barThickness: 40,  // number (pixels) or 'flex'
        maxBarThickness: 40, // number (pixels)
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

            const offset = data >= 1 ? 15 : -5;
            if( i === 0 ) {
              data = '$'  + data + 'M';
              ctx.fillStyle = '#AB7B6C'
            } else {
              ctx.fillStyle = '#DCB8AE'
            }
            if(offset === 15) {
              ctx.fillStyle = '#fff'
            }
            ctx.fillText(data, bar._model.x, bar._model.y + offset);
          });
        });
      }
    }
  }
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
      options={width > 768 ? options : {
        ...options,
        scales: {
          ...options.scales,
          xAxes:  [{
            barThickness: 30,  // number (pixels) or 'flex'
            maxBarThickness: 30, // number (pixels)
            gridLines: {
              display: false,
              drawBorder: false,
            },
          }]
        }
      }}
    />
  );
}

export default RegionChart;
