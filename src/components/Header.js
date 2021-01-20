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
            src="/header-logo.png"
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
`;

export default Header;
