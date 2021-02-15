import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { wrapper } from '../store';
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: HelveticaNeue;
    url('/assets/fonts/HelveticaNeue-01.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: HelveticaNeue;
    url('/assets/fonts/HelveticaNeue-Bold-02.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
  }
  
  ${reset}
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: 'HelveticaNeue', sans-serif;
    font-size: 16px;

    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .font-helveticaneue {
    font-family: 'HelveticaNeue', serif !important;
    
  }
  .font-garamond {
    font-family: 'EB Garamond', serif !important;
  }
  a {
    text-decoration: none;
  }
  button {
    appearance: none;
    border: none;
    background: none;
    padding: 0;
  }

  .tab {
    .tab__contents {
      border-radius: 10px;
      background:#fff;
    }
    .tab__buttons {
      display: flex;
      margin-bottom: 5px;

      button {
        flex: 1;
        max-width: 200px;
        width: 100%;
        background:#fff;
        height: 50px;
        border-radius: 10px;
        margin-right: 5px;
        position:relative;
        outline-width: 0;
        &.active {
          &:after {
            content:'';
            width: 100%;
            height: 15px;
            background:#fff;
            display: block;
            position: absolute;
            left:0;
            bottom: -5px;
          }
        }
      }
    }
  }
`;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(MyApp);


