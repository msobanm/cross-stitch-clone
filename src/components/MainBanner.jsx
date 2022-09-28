import React from 'react'
import styled, { keyframes } from 'styled-components'
import Banner1 from '../img/1stBanner.webp'
import Banner2 from '../img/2ndBanner.webp'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: -140px;
  overflow: hidden;
`

const slide = keyframes`
  25% {
    background-image: url(${Banner2});
  }
  50% {
    background-image: url(${Banner1});
  }
  75% {
    background-image: url(${Banner2});
  }
  100% {
    background-image: url(${Banner1});
  }
`

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Banner1});
  background-size: cover;
  animation-name: ${slide};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`


const MainBanner = () => {
  return (
    <Container>
        <Banner>
        </Banner>
    </Container>
  )
}

export default MainBanner