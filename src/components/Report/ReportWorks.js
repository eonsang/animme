import React, {useState} from 'react';
import styled from "styled-components";

const ReportWorks = () => {
  const [tab, setTab] = useState(1);
  return (
    <ReportWorksLayout>
      <div className={'report__header'}>
        <h3>The successful and unsuccessful works in bidding in the last decade</h3>
      </div>

      <div className="flex">
        <div className="col">
          <div className={'tab'}>
            <div className={'tab__buttons'}>
              <button className={tab===1 ? 'active' : ''} onClick={() => setTab(1)}>Turnover</button>
              <button className={tab===2 ? 'active' : ''} onClick={() => setTab(2)}>Number of lots sold</button>
              <button className={tab===3 ? 'active' : ''} onClick={() => setTab(3)}>% of lots unsold</button>
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
              {tab === 3 && (
                <div className={'content'}>
                  charts3...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ReportWorksLayout>
  );
};

const ReportWorksLayout = styled.div`
  .flex {
    display: flex;
  }
  .col {
    flex: 1;
    max-width: 1100px;
  }
`;

export default ReportWorks;