import React, {useState} from 'react';
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
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const minMaxSpace = 50;
  const minMaxAvg = (maxPrice - minPrice) / 50;

  artworkTimeline?.map(({price}) => {
    const numberPrice = parseInt(price.split(',').join(''), 10);
    if (minPrice === null || minPrice > numberPrice) {
      setMinPrice(numberPrice);
    }
    if (maxPrice === null || maxPrice < numberPrice) {
      setMaxPrice(numberPrice);
    }
  })

  const minTimeLineStyle = {
    marginBottom: 15,
  }
  const maxTimeLineStyle = {
    marginBottom: 15 + minMaxSpace,
  }

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
              {artworkCategory?.map((category, index) => {
                return <li key={index}>{category.category}</li>
              })}
            </ul>
          </div>

          <div className="row">
            <h3>Artwork Timeline</h3>

            <div className={'timeline'}>
              {artworkTimeline?.map(({year, currency, price}, index) => {
                const numberPrice = parseInt(price.split(',').join(''), 10);
                return (
                  <div className={'timeline__item'} key={index}>
                    <div className={'timeline__item-box'} style={
                      numberPrice === minPrice ? minTimeLineStyle
                        :
                        numberPrice === maxPrice ? maxTimeLineStyle
                          :
                        {
                          marginBottom: `${(numberPrice - minPrice) / minMaxAvg}px`
                        }
                    }>
                      <div className={'timeline__content'}>
                        <strong>{currency}</strong>
                        {price}
                      </div>
                    </div>
                    <span className={'timeline__year'}>{year}</span>
                  </div>
                )
              })}
            </div>
            {artworkTimelineText?.map(text => {
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
    max-width: 450px;
    position: relative;
    align-items: flex-end;
    margin-top: 15px;
    &:after {
      content:'';
      display: block;
      width: 100%;
      height: 1px;
      background:#0C435B;
      position: absolute;
      bottom: 10px;
      left: 0;
      z-index: 1;
    }
  }
  .timeline__item {
    flex: 1;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  .timeline__item-box {
    text-align: center;
    color:#fff;
    border: 1px solid #0C435B;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    padding: 5px;
    margin:0 auto;
    margin-bottom: 15px;
    
    .timeline__content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background:#0C435B;
      border-radius: 50%;
      font-size:  14px;
      font-weight: 600;
    }

    strong {
      display: block;
      font-weight: 600;
      font-size:  14px;
      margin-bottom: 5px;
    }
  }
  .timeline__year {
    font-size: 1.125rem;
    color:#0C435B;
    background:#FDFCF9;
    font-weight: 600;
    padding:0 10px;
    line-height: 20px;
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
