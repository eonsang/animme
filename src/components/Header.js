import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Header = () => {
  return (
    <Layout>
      <Link href="/">
        <a>
          <Image
            src="/assets/images/header-logo.png"
            alt="Animme"
            width={108}
            height={28}
          />
        </a>
      </Link>
    </Layout>
  );
};

const Layout = styled.header`
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding:0 85px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 1470px) {
    padding: 0 10px;
    height: 60px;
    background:#fff;
    img {
      height: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      height: 20px;
    }
  }
`;

export default Header;
