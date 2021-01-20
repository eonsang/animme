import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { wrapper } from '../store';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(MyApp);


