import React, {useState, useLayoutEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Header = () => {

  function useWindowPosition () {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition () {
        setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollPosition;
  }

  const windowPosition = useWindowPosition();


  return (
    <Layout scrollTop={windowPosition}>
      <div className={'header__top'}>
        <Link href="/">
          <a className={'logo'}>
            <Image
              src="/assets/images/header-logo.png"
              alt="Animme"
              width={108}
              height={28}
            />
          </a>
        </Link>
        <a href="" className={'each-link'}>Contact</a>
        <a href="" className={'each-link'}>About</a>
      </div>
      <div className={'header__bottom'}>
        <h2 className="name font-garamond">Andy Warhol, <span className={'font-garamond'}>Brillo Soap Pads Box</span></h2>
        <div className={'priceInfo'}>
          <div>
            <span>Total</span>
            <strong className={'font-garamond'}>5,568</strong>
          </div>
          <div>
            <span>Avg price</span>
            <strong className={'font-garamond'}>876,124,243,432</strong>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Layout = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2000;
  padding:0 85px;
  background:#fff;
  @media screen and (max-width: 1470px) {
    padding: 0 10px;
  }
  .header__bottom {
    display: flex;
    align-items: center;
    height: ${props => props.scrollTop > 50 ? '50px' : '0px'};
    overflow: hidden;
    transition: all .3s;
    @media screen and (max-width: 768px) {
      display: block;
      height: ${props => props.scrollTop > 50 ? '55px' : '0px'};
      text-align: center;
      .priceInfo {
        margin-top: 12px;
        justify-content: center !important;
        padding-bottom: 10px;
        div {
          & ~ div {
            margin-left: 1em !important;
          }
        }
      }
    }
     
    
    .name {
      margin-right: auto;
      font-size: 1.25rem;
      font-weight: 600;
      span {
        font-size: 1em;
        font-weight: 400;
      }
    }
    .priceInfo {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
      div {
        display: flex;
        align-items: flex-start;
        & ~ div {
          margin-left: 2em;
        }
      }
      span {
        font-size: 1.25rem;
        color:#9A9A9A;
        margin-right: 5px;
        @media screen and (max-width: 768px) {
          
        }
      }
      strong {
        font-size: 1.75rem;
        color:#333333;
        font-weight: 600;
        @media screen and (max-width: 768px) {
          font-size: 1.5rem;
        }
      }
    }
  }
  .header__top {
    height: ${props => props.scrollTop > 50 ? '60px' : '100px'};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all .3s;
    @media screen and (max-width: 1470px) {
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
  }
  .logo {
    margin-right: auto;
  }
  .each-link {
    margin-left:  2em;
    color:#000;
  }
  
`;

export default Header;
