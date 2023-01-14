import React from 'react'
import styled from 'styled-components'
import {Facebook,Twitter,Instagram,Pinterest, MailOutline, Phone, Room} from '@mui/icons-material'

const Container = styled.div`
  display:flex;
`

const Left = styled.div`
    flex:1;
    padding:20px
`
const Center = styled.div`
    flex:1;
    padding:20px
`
const Right = styled.div`
    flex:1;
    padding:20px
`
const Logo = styled.h1``
const Description = styled.p``

const SocialContainer = styled.div`
  display:flex
`

const SocialLogo = styled.div`
  height:40px;
  width:40px;
  border-radius:50%;
  color:white;
  background-color:#${props=>props.backgroundColor};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px
`
const Title = styled.h3`
  margin-bottom:30px
`

const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap
`

const ListItem = styled.li`
  width:50%;
  margin-bottom:10px
`

const ContactItem = styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
`

const Payment = styled.img`
  width:50%
`


const Footer = () => {
  return (
    <Container>
        <Left>
          <Logo>
            E-Commerce
          </Logo>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quia, deserunt iure maxime nam porro tenetur debitis. Perferendis, tempora optio, suscipit eligendi, iste provident dolorum facere aperiam quos aspernatur officiis?
          </Description>
          <SocialContainer>
          <SocialLogo backgroundColor='3B5999'>
            <Facebook/>
          </SocialLogo>
          <SocialLogo backgroundColor='E4405F'>
            <Instagram/>
          </SocialLogo>
          <SocialLogo backgroundColor='55ACEE'>
            <Twitter/>
          </SocialLogo>
          <SocialLogo backgroundColor='E60023'>
            <Pinterest/>
          </SocialLogo>
          </SocialContainer>
        </Left>
        <Center>
          <Title>
            Useful Links
          </Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem><Room sx={{marginRight:'10px'}}/>702/Fern, Green Leaf Exotica, Opposite GreenFields 3, Vasna-Bhayli main road, Bhayli-391410</ContactItem>
          <ContactItem><Phone sx={{marginRight:'10px'}}/>+91 9712303054</ContactItem>
          <ContactItem><MailOutline sx={{marginRight:'10px'}}/>thakarshrey10.st@gmail.com</ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer