import React from 'react';
import styled from 'styled-components';

const ReportRegion = () => {
  return (
    <ReportRegionLayout>
      <div className={'report__header'}>
        <h3>This Artist’s work’s number of the auctions and regions in the last decade</h3>
      </div>

      <div className={'region__chart'}>
        region__chart
      </div>

    </ReportRegionLayout>
  );
};

const ReportRegionLayout = styled.div`
`;

export default ReportRegion;
