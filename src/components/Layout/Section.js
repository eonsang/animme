import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({children}) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

Section.propTypes = {
  children: PropTypes.element.isRequired
}

const Layout = styled.div`
  width: 100%;
  padding: 100px 0;
`;

export default Section;

