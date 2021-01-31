import React from 'react';
import styled from 'styled-components';

const Info = ({
  lotArtist,
  lotTitle,
  aimmeEstimatedHigh,
  aimmeEstimatedLow,
  aimmeGrowth,
  hammerPrice,
  currentPrice,
  auctionCurrency,
  auctionEstimatedHigh,
  auctionEstimatedLow,
  lotNumber,
  auctionTitle,
}) => {
  return (
    <InfoLayout>
      <div className="top">
        <h2 className={'font-garamond'}>{lotArtist}</h2>
        <p>{lotTitle}</p>
      </div>
      <div className="state">
        <div className="state__inner">
          {
            // lock state
            (!!0) && (
              <div className={'state__lock'}>
                <h2 className={'font-garamond'}>Subscribers ONLY</h2>
                <span>
              <img src="/assets/images/icon-lock.png" alt=""/>
            </span>
                <button className={'font-garamond'}>Unlock</button>
              </div>
            )
          }
          <div className={'state__content'}>
            <p className={'info__title'}>
              Estimated Value of Aimme
              <button>
              </button>
            </p>
            <h3 className={'font-garamond'}>
              $ {aimmeEstimatedLow} ~ {aimmeEstimatedHigh}
            </h3>
            <div className={'growth-box'}>
              <p className={'font-garamond'}>
                Value of Growth prospects
              </p>
              <div className={'growth'}>
                <span className={'font-garamond'}>{aimmeGrowth}</span>
                <button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="price">
        <div className="col">
          <p className={'info__title'}>
            Hammer Price
            <button>
            </button>
          </p>
          <h3 className={'font-garamond'}>{auctionCurrency} {hammerPrice}</h3>
        </div>
        <div className="col">
          <p className={'info__title'}>
            Current Price
            <button>
            </button>
          </p>
          <h3 className={'font-garamond'}>$ {currentPrice}</h3>
        </div>
      </div>

      <div className="etc">
        <p className={'info__title'}>
          Auction House’s Estimate
          <button>
          </button>
        </p>
        <h3 className={'font-garamond'}>{auctionCurrency} {auctionEstimatedLow} ~ ${auctionEstimatedHigh}</h3>
        <br/>
        <p className={'info__title'}>
          LOT {lotNumber}
        </p>
        <h3 className={'font-garamond'}>{auctionTitle}</h3>
      </div>
    </InfoLayout>
  );
};

const InfoLayout = styled.div`
  .top {
    margin-bottom: 15px;
    margin-top: -10px;
    h2 {
      font-size:2.5rem;
      line-height:1.3em;
    }
    p {
      font-size: 1.125rem;
      line-height:1.25em;
    }
  }
  
  .etc {
    padding-top: 15px;
    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-top: 5px;
    }
  }
  
  .price {
    padding: 20px 0;
    border-bottom: 1px solid #C1C1C1;
    display: flex;
    .col {
      flex: 1;
    }
    h3 {
      font-size: 1.875rem;
      font-weight: 600;
      margin-top: 5px;
    }
  }
  
  .info__title {
    font-size: 1rem;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    
    button {
      margin-left: 10px;
      background: url('/assets/images/icon-popover.png') no-repeat center;
      background-size: 100% 100%;
      width: 1.125rem;
      height: 1.125rem;
    }
  }
  
  .growth-box {
    display: flex;
    margin-top: 10px;
    align-content: center;
    
    p {
      color:#45A391;
      font-size: 1rem;
      line-height: 24px;
    }
    
    .growth {
      display: flex;
      align-items: center;
      padding-left: 10px;
      span {
        color:#45A391;
        background: url('/assets/images/icon-growth-up.png') no-repeat left center;
        padding-left: 25px;
        line-height: 24px;
        font-size: 1.875rem;

      }
    }
    button {
      margin-left: 10px;
      background: url('/assets/images/icon-popover.png') no-repeat center;
      background-size: 100% 100%;
      width: 1.125rem;
      height: 1.125rem;
    }
  }
  
  .state {
    padding: 5px 0;
    border: 1px solid #C1C1C1;
    border-left: 0;
    border-right: 0;
    
    
    
    h3 {
      font-size:1.875rem;
      font-weight: 600;
      line-height: 1.3em;
      margin-top: 5px;
    }
  }
  .state__inner {
    background:#FBF7F1;
    padding: 20px;
    position: relative;
  }
  .state__lock {
    position:absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.8);
    border: 1px solid #DC604D;
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    button {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color:#DC604D;
      font-weight: 600;
      border-bottom: 1px solid #dc604d;
      background: url('/assets/images/icon-unlock.png') no-repeat left center;
      padding-left: 20px;
      cursor: pointer;
    }
    
    h2 {
      color:#DC604D;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;

export default Info;
