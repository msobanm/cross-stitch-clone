import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-width: 460px;
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0px 10px;
  cursor: pointer;
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`
const Button = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 5px 10px;
  transition: 0.5s ease-out;
`

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;

  &:hover ${Button} {
    background: white;
    color: black;
  }
`



const ShopItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} alt="Products"/>
        <Info>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default ShopItem