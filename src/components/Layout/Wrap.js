import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = ({children}) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

Wrap.propTypes = {
  children: PropTypes.element.isRequired
}

const Layout = styled.div`
  width: 100%;
  // 가로 패딩 235px
  max-width: calc(100% - 470px);
  margin:0 auto;
`;

export default Wrap;

