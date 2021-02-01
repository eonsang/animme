import React from 'react';
import styled from 'styled-components';
import Section from "../Layout/Section";
import Wrap from "../Layout/Wrap";
import HistoricalChart from "./HistoricalChart";

const History = ({historycalPerfomanceWorks}) => {
  return (
    <HistoryLayout>
      <Section>
        <Wrap>
          <h2>Historical Performance of Similar Works</h2>
          <div className={'historical-chart'}>
            <HistoricalChart historycalPerfomanceWorks={historycalPerfomanceWorks} />
            <div className={'historical-imgs'}>
              {historycalPerfomanceWorks?.map(history => {
                return (
                  <div className={'imgs'} key={history.seq}>
                    <span>
                      <img src={history.img} alt=""/>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </Wrap>
      </Section>
    </HistoryLayout>
  );
};

const HistoryLayout = styled.div`
  background:#062233;
  h2 {
    font-size: 1rem;
    color:#fff;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  
  .historical-imgs {
    display: flex;
    align-items: center;
    padding-right: 50px;
    .imgs {
      flex: 1;
      padding: 5px;
      span {
        margin: 0 auto;
        background:#0C435B;
        display: block;
        height: 70px;
        width: 70px;
        @media screen and (max-width: 768px) {
          height: 45px;
          width: 45px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .historical-chart {
    background: url('/assets/images/historical-bg.png') no-repeat center top;
    background-size: 100% auto;
    padding: 0 9%;
    @media screen and (max-width: 1470px) {
      background: none;
      padding: 0;
    }
    canvas {
      height: 390px !important;
      @media screen and (max-width: 768px) {
        height: 250px !important;  
      }
    }
  }
`;

export default History;
