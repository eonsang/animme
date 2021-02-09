import React, {useEffect, useState} from 'react'
import { Doughnut } from 'react-chartjs-2'



const SecondaryMarketShareChart = ({values, title}) => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    values?.map(value => {
      setLabels(prev => ([
        ...prev,
        value.title
      ]))
      setData(prev => ([
        ...prev,
        value.value
      ]))
    })
  }, []);


  return (
    <>
      <h3 className={'font-garamond'}>{title}</h3>
      <Doughnut data={{
        labels: labels,
        datasets: [
          {
            labels: labels,
            data: data,
            backgroundColor: [
              '#FFFFFF',
              '#FFEBCC',
              '#6C4C43',
              '#9F6656',
              '#AB7B6E',
            ],
            borderWidth: 0,
          },
        ],
      }} options={{
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
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
      }} />
    </>
  );
}

export default SecondaryMarketShareChart
