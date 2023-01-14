import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:#D3D3D3
`

const Header = styled.div`
    height:25vh;
    width:100vw
`

const Content = styled.div`
    background-color:white;
    border-radius:10px;
    width:100vw;
    height:100vh;
    box-shadow: 6px 6px 8px 1px rgba(0,0,0,0.15);
`

const CategoryList = () => {
     return (
        <>
        <Navbar/>
        <Container>
        <Header>

        </Header>
        <Content>

        </Content>
        </Container>
        </>
     )
}

export default CategoryList