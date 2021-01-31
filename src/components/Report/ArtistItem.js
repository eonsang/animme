import React from 'react';
import styled from "styled-components";

const ArtistItem = ({ artist }) => {
  return (
    <ArtistItemLayout>
      <div className={'thumb font-garamond'}>
        {artist.artistName.split(' ')[1].split('')[0]}
      </div>
      <div className={'info'}>
        <h3 className={'font-garamond'}>{artist.artistName}</h3>
        <p>{artist.artistInfo}</p>
      </div>
    </ArtistItemLayout>
  );
};

const ArtistItemLayout = styled.div`
  flex: none;
  width: 33.333%;
  text-align: center;
  &:nth-child(n + 4) {
    margin-top: 2em;
  }
  
  .info {
    margin-top: 10px;
    h3 {
      font-size:1.25rem;
      font-weight: 600;
    }
    p {
     font-size: .75rem;
      color:#5A5A5A;
      margin-top: 5px;
    }
  }
  .thumb {
    width: 6rem;
    height: 6rem;
    background:#fff;
    color:#0C435B;
    border: 1px solid #0C435B;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    font-weight: 600;
    margin:0 auto;
  }
`;

export default ArtistItem;
