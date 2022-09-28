import React from 'react'
import styled from 'styled-components'
import { seasons } from '../data'
import SeasonsItems from './SeasonsItems'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  padding: 100px;
  background-color: #f0efef;
  cursor: pointer;
`

const SeasonImgContainer = styled.div`
  max-width: 460px;
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

const Seasons = () => {
  return (
    <Container>
        <SeasonImgContainer>
          <Image src={require('../img/seasons/seasons.webp').default}/>
        </SeasonImgContainer>
        {seasons.map(item=>(
          <SeasonsItems item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Seasons