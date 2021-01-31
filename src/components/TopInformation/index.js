import React from 'react';
import styled from 'styled-components';

import Wrap from "../Layout/Wrap";
import Section from "../Layout/Section";
import NavSlider from "./NavSlider";
import Info from "./Info";


const TopInformation = ({
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
}) => {
  return (
    <Section>
      <Wrap>
        <TopInformationLayout>
          <SlideLayout>
            <NavSlider lotImages={lotImages}  />
          </SlideLayout>
          <InfoLayout>
            <Info
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
          </InfoLayout>
        </TopInformationLayout>
      </Wrap>
    </Section>
  );
};

const TopInformationLayout = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const SlideLayout = styled.div`
  flex: 1;
  max-width: 625px;
  @media screen and (max-width: 1200px) {
    max-width: 450px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 370px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const InfoLayout = styled.div`
  padding-left: 40px;
  flex: 1;
  @media screen and (max-width: 1200px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

export default TopInformation;
