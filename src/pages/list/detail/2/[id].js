import React from 'react';
import styled from 'styled-components';
import Header from "../../../../components/Header";
import TopInformation from "../../../../components/TopInformation";
import Overview from "../../../../components/Overview";
import History from "../../../../components/History";
import Charts from "../../../../components/Charts";
import PriceFluctuationFactors from "../../../../components/PriceFluctuationFactors";
import Description from "../../../../components/Description";
import Report from "../../../../components/Report";

import { fetchData } from '../../../../actions/data';

const Home = ({ data }) => {
  console.log(data);
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
    averageAnnualSales,
    priceFluctuationFactor,
    secondaryMarketShareByValue,
    secondaryMarketShareByVolume,
    tradeVolumesSector,
    marketShareSector,

    // Description
    exhibited,
    essay,
    literature,

    // report
    artist,
    artistInfo,
    topMediums,
    averageSize,
    relatedArtists,
    mostPopularAuction,
    mostPopularRegion,
    soldInAuction,
    unsoldInAuction,
    priceBidding,
    lastDecadeAuctionInfo,
    mostRecentSoldLotList,
    highestPriceSoldLotList,
    recentIssueList,
    artistMarketRisk
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
          <Charts
            averageAnnualSales={averageAnnualSales}
            secondaryMarketShareByValue={secondaryMarketShareByValue}
            secondaryMarketShareByVolume={secondaryMarketShareByVolume}
            tradeVolumesSector={tradeVolumesSector}
            marketShareSector={marketShareSector}
          />
          <PriceFluctuationFactors priceFluctuationFactor={priceFluctuationFactor} />
          <Description
            exhibited={exhibited}
            essay={essay}
            literature={literature}
          />
          <Report
            artist={artist}
            artistInfo={artistInfo}
            topMediums={topMediums}
            averageSize={averageSize}
            relatedArtists={relatedArtists}
            mostPopularAuction={mostPopularAuction}
            mostPopularRegion={mostPopularRegion}
            soldInAuction={soldInAuction}
            unsoldInAuction={unsoldInAuction}
            priceBidding={priceBidding}
            lastDecadeAuctionInfo={lastDecadeAuctionInfo}
            mostRecentSoldLotList={mostRecentSoldLotList}
            highestPriceSoldLotList={highestPriceSoldLotList}
            recentIssueList={recentIssueList}
            artworkCategory={artworkCategory}
            artistMarketRisk={artistMarketRisk}
            lotImages={lotImages}
          />
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

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;
    const response = await fetchData(id);
    const {data} = response;

    console.log(data);
    return {
      props: {
        data: data.responseObject
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
