import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  max-width: 440px;
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 10px;
  overflow: hidden;
`

const Image = styled.img`
  height: 90%;
  object-fit: cover;
`

const Header1 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  letter-spacing: 1px;
`

const Header2 = styled.h2`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
`

const SeasonsItems = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Header1>{item.title1}</Header1>
      <Header2>{item.title2}</Header2>
    </Container>
  )
}

export default SeasonsItems