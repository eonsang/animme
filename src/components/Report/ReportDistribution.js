import React, {useState} from 'react';
import styled from "styled-components";

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
                  charts1...
                </div>
              )}
              {tab === 2 && (
                <div className={'content'}>
                  charts2...
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col">
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
  }
`;

export default ReportDistribution;
