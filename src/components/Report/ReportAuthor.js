import React from 'react';
import styled from "styled-components";

const ReportAuthor = ({
  artist,
  artistInfo,
  marketLevel,
  auctionGeuranteeValue
}) => {
  return (
    <ReportAuthorLayout>
      <div className="left">
        <div className={'thumb font-garamond'}>
          {artist.split('')[0]}
        </div>
        <div className={'info'}>
          <h3 className={'font-garamond'}>{artist}</h3>
          <p>{artistInfo}</p>
        </div>
      </div>
      <div className="right">
        <div className={'col'}>
          <div>
            <span className={'font-garamond'}>{marketLevel}</span>
          </div>
          <p>
            Market<br/>
            Stability Level
          </p>
        </div>
        <div className={'col'}>
          <div>
            <span className={'font-garamond'}>{auctionGeuranteeValue}</span>
          </div>
          <p>
            Auction<br/>
            Geurantee Value
          </p>
        </div>
      </div>
    </ReportAuthorLayout>
  );
};

const ReportAuthorLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
  }
  
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
    
    .col {
      flex: none;
      margin-left: 3em;
      @media screen and (max-width: 768px) {
        &:first-child {
          margin-left: 0;
        }
      }
      
      p {
        text-align: center;
        margin-top: 10px;
        font-size: .875rem;
        line-height: 1.25em;
        word-break: keep-all;
      }
      div {
        width: 6.5rem;
        height: 6.5rem;
        border: 1px solid #222;
        border-radius: 50%;
        padding: .5rem;
      }
      span {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        border: 1px dashed #222;
        border-radius: 50%;
        font-size: 1.5rem;
      }
    }
  }
  
  .left {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: block;
      margin-bottom: 2em;
    }
    .info {
      margin-left: 1.5em;
      @media screen and (max-width: 768px) {
        text-align: center;
        margin-left: 0;
      }
      
      h3 {
        font-size: 2rem;
        line-height: 1.25em;
        font-weight: 600;
      }
      p {
        font-size: 1rem;
        line-height: 1.375em;
      }
    }
  }
  
  .thumb {
    width: 9rem;
    height: 9rem;
    background:#0C435B;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;
export default ReportAuthor;
