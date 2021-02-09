import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Doughnut} from "react-chartjs-2";

const MarketShareChart = ({marketShareSector}) => {
  const [labels, setLabels] = useState([]);
  const [value, setValue] = useState([]);
  const [volume, setVolume] = useState([]);

  useEffect(() => {
    marketShareSector?.map(info => {
      setLabels(prevState => ([
        ...prevState,
        info.title
      ]));
      setValue(prevState => ([
        ...prevState,
        info['value']
      ]));
      setVolume(prevState => ([
        ...prevState,
        info['volume']
      ]))
    })
  }, []);
  return (
    <MarketShareChartLayout>
      <div className={'colbox'}>
        <Doughnut
          data={{
            labels: labels,
            datasets: [{
              data: value,
              backgroundColor: [
                '#FFFFFF',
                '#A8796C',
                '#D2AF8D',
                '#EBCEA6',
                '#FFEBCC'
              ],
              borderWidth: 0,
              labels: labels
            }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            events: false,
            animation: {
              duration: 500,
              easing: "easeOutQuart",
              onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset) {

                  for (var i = 0; i < dataset.data.length; i++) {
                    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                      total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                      mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                      start_angle = model.startAngle,
                      end_angle = model.endAngle,
                      mid_angle = start_angle + (end_angle - start_angle)/2;

                    var x = mid_radius * Math.cos(mid_angle);
                    var y = mid_radius * Math.sin(mid_angle);

                    ctx.fillStyle = '#fff';
                    if (i == 0){ // Darker text color for lighter background
                      ctx.fillStyle = '#000';
                    }
                    var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
                    // ctx.fillText(percent, model.x + x, model.y + y + 15);
                    // ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                    ctx.fillText(dataset.labels[i], model.x + x, model.y + y + 15 );
                    ctx.fillText(percent, model.x + x, model.y + y);
                    // Display percent in another line, line break doesn't work for fillText
                  }
                });
              }
            }
          }}
        />
        <p className={'font-garamond'}>a. By Value of Sales</p>
      </div>

      <div className={'colbox'}>
        <Doughnut
          data={{
            labels: labels,
            datasets: [{
              data: volume,
              backgroundColor: [
                '#FFFFFF',
                '#A8796C',
                '#D2AF8D',
                '#EBCEA6',
                '#FFEBCC'
              ],
              borderWidth: 0,
              labels: labels,
            }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            events: false,
            animation: {
              duration: 500,
              easing: "easeOutQuart",
              onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset) {

                  for (var i = 0; i < dataset.data.length; i++) {
                    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                      total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                      mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                      start_angle = model.startAngle,
                      end_angle = model.endAngle,
                      mid_angle = start_angle + (end_angle - start_angle)/2;

                    var x = mid_radius * Math.cos(mid_angle);
                    var y = mid_radius * Math.sin(mid_angle);

                    ctx.fillStyle = '#fff';
                    if (i == 0){ // Darker text color for lighter background
                      ctx.fillStyle = '#000';
                    }
                    var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
                    // ctx.fillText(percent, model.x + x, model.y + y + 15);
                    // ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                    ctx.fillText(dataset.labels[i], model.x + x, model.y + y + 15 );
                    ctx.fillText(percent, model.x + x, model.y + y);
                    // Display percent in another line, line break doesn't work for fillText
                  }
                });
              }
            }
          }}
        />
        <p className={'font-garamond'}>a. By Value of Sales</p>
      </div>

    </MarketShareChartLayout>
  );
};

const MarketShareChartLayout = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: block;
  }
  .colbox {
    flex: 1;
    
    
    & ~ .colbox {
      margin-left: 2em;
      @media screen and (max-width: 600px) {
        margin-top: 3em;
        margin-left: 0;
      }
    }
    
    p {
      color:#fff;
      margin-top: 1.5em;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export default MarketShareChart;
