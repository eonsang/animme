import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class NavSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const {lotImages} = this.props;
    const topSlideSetting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const navSlideSetting = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };

    return (
      <div>
        <TopSlideBox>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...topSlideSetting}
          >
            {lotImages.map(img => {
              return (
                <TopSlideItem key={img.imgSeq}>
                  <div className={'img'} >
                    <img src={img.imgSrc} alt=""/>
                  </div>
                </TopSlideItem>
              )
            })}
          </Slider>
        </TopSlideBox>

        <NavSlideBox>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}

            {...navSlideSetting}
          >
              {lotImages.map((img) => {
                return (
                  <NavSlideItem key={img.imgSeq}>
                    <div className={'img'} >
                      <img src={img.imgSrc} alt=""/>
                    </div>
                  </NavSlideItem>
                )
              })}
          </Slider>
        </NavSlideBox>
      </div>
    );
  }
}

const TopSlideBox = styled.div`
  .slick-arrow {
    background:#eee;
    top: auto;
    bottom: -70px !important;
    transform: none;
    height: 60px;
    width: 30px;
    &.slick-next {
      right: 0;
      background: url('/assets/images/topslide-arrow-right.png') no-repeat center;
    }
    &.slick-prev {
      left: 0;
      background: url('/assets/images/topslide-arrow-left.png') no-repeat center;
    }

    &:before {
      display: none;
    }
  }
`;
const TopSlideItem = styled.div`
  background:#EBEBEB;
  vertical-align: top;
  
  .img {
    padding: 10px;
    height: 435px;
    @media screen and (max-width: 1200px) {
      height: 405px;
    }
  }
`;

const NavSlideBox = styled.div`
  margin-top: 10px;
  padding:0 30px;
  
  .slick-track {
    width: 100% !important;
  }
`;
const NavSlideItem = styled.div`
  vertical-align: top;
  padding:0 5px;

  .img {
    background:#EBEBEB;
    padding: 5px;
    height: 60px;
  }
`;
