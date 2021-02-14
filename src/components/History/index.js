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
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .historical-imgs {
    display: flex;
    align-items: center;
    //padding-right: 50px;
    position: absolute;
    width: 100%;
    padding: 0 calc(10% + 50px) 0 10%;
    left: 0;
    bottom: 40px;
    @media screen and (max-width: 1470px) {
      padding: 0 50px 0 0;
    }
    .imgs {
      flex: 1;
      span {
        margin: 0 auto;
        display: block;
        height: 80px;
        width: 80px;
        background:#0C435B;
        padding: 5px;
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
    position: relative;
    background: url('/assets/images/historical-bg.png') no-repeat center top;
    background-size: auto 470px;
    padding: 0 10%;
    &:after {
      content:'';
      display: block;
      width: 80%;
      height: 30px;
      background:#0C435B;
      position: absolute;
      left:10%;
      bottom: 0;
      z-index: 1;
      @media screen and (max-width: 1470px) {
        left: 0;
        width: calc(100% - 50px);
      }
    }
    @media screen and (max-width: 1470px) {
      background: none;
      padding: 0;
    }
    canvas {
      position: relative;
      z-index: 2;
      height: 470px !important;
      @media screen and (max-width: 768px) {
        height: 370px !important;  
      }
    }
  }
`;

export default History;
