import React from 'react';
import styled from "styled-components";
import Section from "../Layout/Section";
import Wrap from "../Layout/Wrap";

const Chart = () => {
  return (
    <ChartLayout>
      <Section>
        <Wrap>
          <div className="flex">
            <div className="col">
              <h2>Trade Volume : Post-War and Contemporary Sector</h2>
            </div>
            <div className="col">
              <h2>Market Share by Sector of the Fine Art Auction Market in 2019</h2>
            </div>
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <h2>Secondary Market Share of the Post-War and Contemporary Sector in 2019</h2>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <h2>Reference: Average Annual Sales by Sector, 2018 and 2019</h2>
        </Wrap>
      </Section>

    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  background:#032D43;
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    background: url('/assets/images/chart-bg.png') no-repeat center;
    background-size: 100% 100%;
    width: 373px;
    height: 313px;
    content:'';
    right: -160px;
    top: 30%;
  }
  &:before {
    background: url('/assets/images/chart-bg2.png') no-repeat center;
    right: auto;
    left: -160px;
    top: 50%;
  }
  h2 {
    color:#fff;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .flex {
    display: flex;
    
    .col {
      flex: 1;
      
      * ~ .col {
        margin-left:5em;
      }
    }
  }
`;


export default Chart;
