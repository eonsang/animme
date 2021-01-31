import React from 'react';
import styled from 'styled-components';
import ArtistItem from "./ArtistItem";

const ReportOverview = ({
  topMediums,
  averageSize,
  relatedArtists,
  artworkCategory
}) => {
  return (
    <ReportOverviewLayout>
      <div className={'report__header'}>
        <h3>Artist overview</h3>
      </div>

      <div className="flex">
        <div className="col">
          <p className={'over_title'}>Artist Category</p>
          <ul className={'category'}>
            {artworkCategory.map((category, index) => {
              return <li key={index}>{category.category}</li>
            })}
          </ul>
          <br/>
          <br/>
          <p className={'over_title'}>Top Two Mediums of Major Deals</p>
          <div className={'majorDeals'}>
            {topMediums.map(medium => {
              return (
                <div key={medium.seq} className={'majorDealItem'}>
                  <div className="img">
                    <img src={`/assets/images/icon-${medium.medium}.png`} alt=""/>
                  </div>
                  <div className="info">
                    <p>{medium.medium}</p>
                    <h3 className={'font-garamond'}>{medium.ratio}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col">
          <p className={'over_title'}>Average Size of Major Deals</p>
          <div className={'sizebox'}>
            {averageSize}
          </div>
          <div className={'scalebox'}>
            <img src="/assets/images/icon-scale-arrow.png" alt=""/>
            <a href="#//" className={'link'}>Check the Real Scale</a>
          </div>
        </div>
        <div className="col col--artist">
          <p className={'over_title'}>Related Artists</p>
          <div className={'artists'}>
            {relatedArtists.map(artist => {
              return <ArtistItem key={artist.seq} artist={artist} />
            })}
          </div>
        </div>
      </div>
    </ReportOverviewLayout>
  );
};

const ReportOverviewLayout = styled.div`
  
  .flex {
    display: flex;
    @media screen and (max-width: 1200px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 600px) {
      display: block;
    }
  }
  .col {
    flex: 1;
    &.col--artist {
      flex: 2;
      @media screen and (max-width: 1200px) {
        width: 100%;
        flex: none;
        margin-top: 4em;
        margin-left: 0 !important;
      }
    }
    & ~ .col {
      margin-left: 5em;

      @media screen and (max-width: 1200px) {
        margin-left: 3em;
      }
      @media screen and (max-width: 600px) {
        margin-left: 0;
        margin-top: 4em;
      }
    }
  }
  
  .artists {
    display: flex;
    flex-wrap: wrap;
  }
  
  .over_title {
    font-size: 1rem;
    margin-bottom: 10px;
    @media screen and (max-width: 1200px) {
      text-align: center;
    }
  }
  li {
    color:#0C435B;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.25em;
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }
  
  .sizebox {
    width: 100%;
    background:#EEE4D6;
    text-align: center;
    padding: 7.25em 0;
  }
  
  .scalebox {
    display: flex;
    align-items: center;
    margin-top: 1em;
    
    .link {
      flex: 1;
      background:#222;
      color:#fff;
      line-height: 50px;
      text-align: center;
      margin-left: 1em;
      border-radius: 2em;
    }
  }
  
  .majorDeals {
    display: flex;
  }
  .majorDealItem {
    flex: 1;
    text-align: center;
    .img {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info {
      border-top: 5px solid #EEE4D6;
      padding-top: 10px;
    }
    p {
      font-size: 1rem;
      line-height:1.25em;
    }
    h3 {
      font-size: 1.875rem;
      line-height:1.25em;
      font-weight: 600;
    }
  }
`;

export default ReportOverview;
