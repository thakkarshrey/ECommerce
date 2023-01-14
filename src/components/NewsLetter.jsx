import React from 'react'
import styled from 'styled-components'
import {Send} from '@mui/icons-material'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#fcf5f5;
    height:60vh
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px
`
const Description = styled.div`
margin-bottom:20px;
font-size:24px;
font-weight:300
`
const InputContainer = styled.div`
    width:50%;
    background-color:white;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid lightgray
`
const Input = styled.input`
flex:8;
padding:10px;
border:none;
&:focus-visible{
    outline:none
}
`
const Button = styled.button`
flex:1;
padding:7px;
background-color:teal;
color:white;
border:none
`


const NewsLetter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>
        Get timely updates from your favourite products.
        </Description>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter