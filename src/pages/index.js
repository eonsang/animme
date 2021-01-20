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

  console.log(data);

  return (
    <div className={'wrapper'}>
      <Header />

      <Container>
        <>
          <TopInformation />
          <Overview />
          <History />
          <Charts />
          <PriceFluctuationFactors />
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
