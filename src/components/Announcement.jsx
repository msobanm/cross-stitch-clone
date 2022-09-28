import React from 'react'
import styled from 'styled-components'
import { BiUser, BiCartAlt} from "react-icons/bi"

const Wrapper = styled.div`
  height: 38px;
  background-color: black;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`

const Center = styled.a`
  flex: 1.4;
  color: white;
  text-align: end;
  padding-top: 10px;
  font-size: 14px;
  text-decoration: none;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const IconContainer = styled.a`
  margin: 10px 20px;
`

const Announcement = () => {
  return (
    <Wrapper>
        <Center href='/'>
            Cotton Satin Unstitched Collection | Shop Now
        </Center>
        <Right>
            <IconContainer href=''>
              <BiUser color='white' size={20}/>
            </IconContainer>
            <IconContainer href=''>
              <BiCartAlt color='white' size={20}/>
            </IconContainer>
        </Right>
    </Wrapper>
  )
}

export default Announcement