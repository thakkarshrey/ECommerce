import React from 'react'
import styled from 'styled-components'
import {TextField, InputAdornment, Badge} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height:60px;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center
`
const Center = styled.div`
    flex:1
`
const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center
`
const SearchContainer = styled.div`
    display:flex;
    align-items:center
`
const Logo = styled.div`
    font-weight:bold;
    font-size:44px;
    text-align:center
`

const MenuItem = styled.div`
    margin:0 10px
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <SearchContainer>
            <TextField 
            variant='outlined' 
            size='small'
            placeholder='Search...'
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                      <HighlightOffIcon />
                    </InputAdornment>
                  ),
              }}
            />
            </SearchContainer>
        </Left>
        <Center>
            <Logo>E-Commerce</Logo>
        </Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN-IN</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
            </Badge>
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar