import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Doughnut} from "react-chartjs-2";

const MarketShareChart = ({marketShareSector}) => {
  const [labels, setLabels] = useState([]);
  const [value, setValue] = useState([]);
  const [volume, setVolume] = useState([]);

  useEffect(() => {
    marketShareSector.map(info => {
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
            }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
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
            }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
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
