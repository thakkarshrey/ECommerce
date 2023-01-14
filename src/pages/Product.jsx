import React from 'react'
import styled from 'styled-components'
import Anouncement from '../components/Anouncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``
const Wrapper = styled.div`
    display:flex;
    padding:50px
`
const ImageContainer = styled.div`
    flex:1
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px
`
const Title = styled.h1`
font-weight:200;
font-size:40px
`
const Description = styled.p``

const Price = styled.span`
font-weight:200;
font-size:40px
`
const sizeOptions = [
    { label: 'XS', id: 1 },
    { label: 'S', id: 2 },
    { label: 'M', id: 3 },
    { label: 'L', id: 4 },
    { label: 'XL', id: 5 }
  ];

const FilterContainer = styled.div`
margin:30px 0px;
width:60%;
display:flex;
justify-content:space-between
`

const ColorFilter = styled.div`
  display:flex;
  align-items:center
`

const SizeFilter = styled.div`
  display:flex;
  align-items:center
`

const FilterColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props=>props.color};
  margin:0px 6px;
  cursor:pointer
`

const FilterTitle = styled.div`
  font-size:20px
`

const AddContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:60%
`

const AmountContainer = styled.div`
  display:flex;
  align-items:center;
`

const Button = styled.button`
  background-color:white;
  padding:15px;
  border:2px solid teal;
  font-weight:200;
  font-size:15px;
  cursor:pointer;
  &:hover{
    background-color:#f8f4f4
  }
`
const Amount= styled.div`
  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px
`

const Product = () => {
  return (
    <Container>
     <Anouncement/>   
     <Navbar/>
     <Wrapper>
        <ImageContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
        </ImageContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Description>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quos doloremque obcaecati ex officiis non quibusdam dolores tenetur consequatur. Est repellat reprehenderit voluptatum ipsam beatae expedita odit, architecto libero! Error quos vero doloremque non. At, velit iure! Laudantium debitis odit harum numquam perspiciatis excepturi odio!
            </Description>
            <Price>$ 20</Price>
            <FilterContainer>
                <ColorFilter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
                </ColorFilter>

            <SizeFilter>
                <FilterTitle>Size</FilterTitle>
                <Autocomplete
                    options={sizeOptions}
                    sx={{ width: 100, marginLeft:'10px' }}
                    disableClearable
                    renderInput={
                    (params) => <TextField 
                            {...params} 
                            label="Size" 
                            size='small'
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'off',
                              }}                            
                            />}
                    />
            </SizeFilter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
     </Wrapper>
     <NewsLetter/>
     <Footer/>
    </Container>
  )
}

export default Product