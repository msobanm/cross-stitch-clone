import React from 'react';
import styled from 'styled-components';
import { MdDoneOutline } from "react-icons/md";
import { BsFacebook, BsInstagram, BsYoutube, BsWhatsapp} from "react-icons/bs";
import { IoLocationSharp, IoCallSharp, IoMail} from "react-icons/io5";

const Container = styled.div`
    height: 70vh;
    width: 125vh;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    padding: 50px;
    background-color: #f0efef;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 20px 0px;
`

const BottomWrapper = styled.div`
  display: flex;
  margin-top: 150px;
`

const Title = styled.h1`
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
`

const InputContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 530px;
`

const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: gray;
  cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`

const IconContainer = styled.div`
  margin-right: 20px;
`

const Left = styled.div``

const List = styled.ul`
  padding: 0px;
  margin: 0px;
`
const ListTitle = styled.h4``
const ListItem = styled.li`
  list-style: none;
  margin: 20px 0px;
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const MidLeft = styled.div`
  margin: 0px 50px;
`

const MidRight = styled.div`
  margin: 0px 50px;
`

const Right = styled.div`
  margin-left: 50px;
`

const Footer = () => {
  return (
    <Container>
        <Wrapper>
          <Title>STAY IN TOUCH</Title>
          <InputContainer>
              <Input placeholder='Email adress'/>
              <Button>
                <MdDoneOutline/>
              </Button>
          </InputContainer>
          <Icons>
            <IconContainer>
              <BsFacebook size={40}/>
            </IconContainer>
            <IconContainer>
              <BsInstagram size={40}/>
            </IconContainer>
            <IconContainer>
              <BsYoutube size={40}/>
            </IconContainer>
          </Icons>
        </Wrapper>
        <BottomWrapper>
          <Left>
            <List>
              <ListTitle>FIND US</ListTitle>
              <ListItem>
                <IoLocationSharp size={20}/>45-50 GULBERG III INDUSTRIAL AREA LAHORE, PAKISTAN
              </ListItem>
              <ListItem>
                <IoCallSharp size={20}/>HELP LINE <br />
                042-111-111-009 <br />
                (10AM TO 5.30PM) MON TO SAT
              </ListItem>
              <ListItem>
                <BsWhatsapp size={20}/> WHATSAPP <br />
                +92 302 8141555 <br />
                (10AM TO 5.30PM) MON TO SAT
              </ListItem>
              <ListItem>
                <IoMail size={20}/>SALES@CROSSSTITCH.PK
              </ListItem>
            </List>
          </Left>
          <MidLeft>
          <List>
              <ListTitle>CUSTOMER CARE</ListTitle>
              <ListItem>
                STORE LOCATIONS
              </ListItem>
              <ListItem>
                POLICIES
              </ListItem>
              <ListItem>
                ORDERING & TRACKING
              </ListItem>
            </List>
          </MidLeft>
          <MidRight>
          <List>
              <ListTitle>INFORMATION</ListTitle>
              <ListItem>
                PRIVACY POLICY
              </ListItem>
              <ListItem>
                PAYMENT METHOD
              </ListItem>
              <ListItem>
                RETURNS & EXCHANGES
              </ListItem>
              <ListItem>
                CONTACT US
              </ListItem>
              <ListItem>
                COVID-19 POLICY
              </ListItem>
            </List>
          </MidRight>
          <Right>
            <List>
                <ListTitle>ABOUT US</ListTitle>
                <ListItem>
                  THE BRAND
                </ListItem>
                <ListItem>
                  SHOPPING POLICY
                </ListItem>
                <ListItem>
                  ORDERING & TRACKING
                </ListItem>
              </List>
          </Right>
        </BottomWrapper>
    </Container>
  )
}

export default Footer