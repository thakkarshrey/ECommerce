import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover
`
const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center

`
const Title = styled.h1`
color:white;
`
const Button = styled.button`
    border:none;
    color:gray;
    padding:10px;
    cursor:pointer;
    font-weight:600
`


const CategoryItem = ({category}) => {
  return (
    <Container>
        <Image src={category.img}/>
        <Info>
            <Title>
                {category.title}
            </Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem