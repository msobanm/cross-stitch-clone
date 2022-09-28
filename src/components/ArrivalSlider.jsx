import React from 'react';
import Slider from 'react-styled-carousel';
import styled from 'styled-components';
import First from '../img/sliderImgs/1.webp'
import Second from '../img/sliderImgs/2.webp'
import Third from '../img/sliderImgs/3.webp'
import Fourth from '../img/sliderImgs/4.webp'
import Fifth from '../img/sliderImgs/5.webp'
import Sixth from '../img/sliderImgs/6.webp'
import Seventh from '../img/sliderImgs/7.webp'

const Container = styled.div`
    padding: 10px;
    margin: 0px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`
const Header = styled.h3`
    width: fit-content;
    font-family: 'Playfair Display', sans-serif;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2px;
    margin-top: 30px;
    align-self: center;
`
const ArrivalContainer = styled.div`
    width: 1280px;
    height: 720px;
    align-self: center;
`

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];

const ImageContainer = styled.div`
  min-width: 350px;
  height: 400px;
  margin: 30px;
`
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`
const settings = {
  showDots: false,
};

const ArrivalSlider = () => (
  <Container>
        <Header>
            New Arrivals
        </Header>
        <ArrivalContainer>
          <Slider responsive={responsive} {...settings}>
            <ImageContainer><Image src={First} alt="" /></ImageContainer>
            <ImageContainer><Image src={Second} alt="" /></ImageContainer>
            <ImageContainer><Image src={Third} alt="" /></ImageContainer>
            <ImageContainer><Image src={Fourth} alt="" /></ImageContainer>
            <ImageContainer><Image src={Fifth} alt="" /></ImageContainer>
            <ImageContainer><Image src={Sixth} alt="" /></ImageContainer>
            <ImageContainer><Image src={Seventh} alt="" /></ImageContainer>
          </Slider>
        </ArrivalContainer>
    </Container>
);

export default ArrivalSlider