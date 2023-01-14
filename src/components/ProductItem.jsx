import React from 'react'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlined from '@mui/icons-material/SearchOutlined'     
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components'

const Info = styled.div`
    opacity:0;
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:3;
    background-color:rgba(0,0,0,0.25);
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.5s ease 
`

const Container = styled.div`
    flex:1;
    min-width:280px;
    height:350px;
    margin:3px;
    background-color:#f5fbfd;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    cursor:pointer;
    &:hover ${Info}{
        opacity:1
    }
`
const Circle = styled.div`
    height:200px;
    width:200px;
    border-radius:50%;
    background-color:white;
    position:absolute
`
const Image = styled.img`
    height:75%;
    z-index:2
`

const Icon = styled.div`
    height:50px;
    width:50px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
        transition:all 0.5s ease
    }
`

const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem