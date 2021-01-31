import React from 'react';
import styled from 'styled-components';
import Section from "../Layout/Section";
import Wrap from "../Layout/Wrap";

const History = ({historycalPerfomanceWorks}) => {
  return (
    <HistoryLayout>
      <Section>
        <Wrap>
          <h2>Historical Performance of Similar Works</h2>
          <div>
            charts...
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
`;

export default History;
