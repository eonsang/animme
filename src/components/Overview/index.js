import React from 'react';
import Section from "../Layout/Section";
import styled from "styled-components";
import Wrap from "../Layout/Wrap";

const Overview = ({
  brushStroke,
  provenance,
  artworkCategory,
  artworkTimeline,
  artworkTimelineText,
}) => {
  return (
    <OverviewLayout>
      <Section>
        <Wrap>
          <h2 className={'font-garamond'}>Artwork Overview and Analytics</h2>

          <div className="row">
            <h3>Brushstroke</h3>
            <p dangerouslySetInnerHTML={{__html: brushStroke}} />
          </div>

          <div className="row">
            <h3>Provenance</h3>
            <p dangerouslySetInnerHTML={{__html: provenance}} />
          </div>

          <div className="row">
            <h3>Artwork Category</h3>
            <ul>
              {artworkCategory.map((category, index) => {
                return <li key={index}>{category.category}</li>
              })}
            </ul>
          </div>

          <div className="row">
            <h3>Artwork Timeline</h3>

            <div className={'timeline'}>
              {artworkTimeline.map(({year, currency, price}, index) => {
                return (
                  <div key={index}>
                    {year}
                    {currency}
                    {price}
                  </div>
                )
              })}
            </div>

            {artworkTimelineText.map(text => {
              return <p key={text.seq} dangerouslySetInnerHTML={{__html: text.text}} />
            })}
          </div>
        </Wrap>
      </Section>
    </OverviewLayout>
  );
};

const OverviewLayout = styled.div`
  background:#FDFCF9;
  
  h2 {
    font-size: 2.5rem;
    line-height:1.3em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5em;
    @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
  
  .timeline {
    display: flex;
    margin-bottom: 10px;
  }
  
  .row {
    margin-bottom: 1.75em;
    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.375em;
    }
    
    li {
      color:#0C435B;
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.25em;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Overview;
