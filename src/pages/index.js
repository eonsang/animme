import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import TopInformation from "../components/TopInformation";
import Overview from "../components/Overview";
import History from "../components/History";
import Charts from "../components/Charts";
import PriceFluctuationFactors from "../components/PriceFluctuationFactors";
import Description from "../components/Description";
import Report from "../components/Report";

import { fetchData } from '../actions/data';

const Home = ({ data }) => {
  const {
    lotImages,
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

    brushStroke,
    provenance,
    artworkCategory,
    artworkTimeline,
    artworkTimelineText,

    historycalPerfomanceWorks,

    // charts...

    priceFluctuationFactor
  } = data;

  return (
    <div className={'wrapper'}>
      <Header />

      <Container>
        <>
          <TopInformation
            lotImages={lotImages}
            lotArtist={lotArtist}
            lotTitle={lotTitle}
            aimmeEstimatedHigh={aimmeEstimatedHigh}
            aimmeEstimatedLow={aimmeEstimatedLow}
            aimmeGrowth={aimmeGrowth}
            hammerPrice={hammerPrice}
            currentPrice={currentPrice}
            auctionCurrency={auctionCurrency}
            auctionEstimatedHigh={auctionEstimatedHigh}
            auctionEstimatedLow={auctionEstimatedLow}
            lotNumber={lotNumber}
            auctionTitle={auctionTitle}
          />
          <Overview
            brushStroke={brushStroke}
            provenance={provenance}
            artworkCategory={artworkCategory}
            artworkTimeline={artworkTimeline}
            artworkTimelineText={artworkTimelineText}
          />

          <History
            historycalPerfomanceWorks={historycalPerfomanceWorks}
          />
          <Charts />
          <PriceFluctuationFactors priceFluctuationFactor={priceFluctuationFactor} />
          <Description />
          <Report />
        </>
      </Container>
    </div>
  )
}

const Container = styled.div`
  padding-top: 100px;
  width: 100%;

  @media screen and (max-width: 1470px) {
    padding-top: 60px;
  }
`;

export default Home;

export async function getServerSideProps() {
  try {
    const response = await fetchData();
    const {data} = response;
    return {
      props: {
        data
      }
    }
  }
  catch(error) {
    return {
      props: {
        error: true
      }
    }
  }
}
