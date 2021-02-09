import React, {useState} from 'react';
import styled from "styled-components";
import DistributionTurnoverChart from "./DistributionTurnoverChart";

const ReportDistribution = () => {
  const [tab, setTab] = useState(1);
  return (
    <ReportDistributionLayout>
      <div className={'report__header'}>
        <h3>Distribution by material</h3>
      </div>

      <div className="flex">
        <div className="col">
          <div className={'tab'}>
            <div className={'tab__buttons'}>
              <button className={tab===1 ? 'active' : ''} onClick={() => setTab(1)}>Turnover</button>
              <button className={tab===2 ? 'active' : ''} onClick={() => setTab(2)}>Number of lots sold</button>
            </div>
            <div className={'tab__contents'}>
              {tab === 1 && (
                <div className={'content'}>
                  <DistributionTurnoverChart />
                </div>
              )}
              {tab === 2 && (
                <div className={'content'}>
                  <DistributionTurnoverChart />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col col--img">
          <img src="/assets/images/report-bg-img.png" alt=""/>
        </div>
      </div>
    </ReportDistributionLayout>
  );
};

const ReportDistributionLayout = styled.div`
  .flex {
    display: flex;
  }
  .col {
    flex: 1;
    & ~ .col {
      margin-left: 7em;
    }
    canvas {
      height: 300px;
    }
    .content {
      padding: 3em 1em;
    }
    @media screen and (max-width: 1470px) {
      text-align: center;
      canvas {
        width: 100% !important;
        max-width: 650px;
        height: 300px;
        margin:0 auto;
      }
      &.col--img {
        display: none;
      }
    }
    img {
      max-width: 100%;
    }
  }
  
  .content {
    padding: 2em 1em;
  }
`;

export default ReportDistribution;
