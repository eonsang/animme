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
      }} />
    </>
  );
}

export default SecondaryMarketShareChart
