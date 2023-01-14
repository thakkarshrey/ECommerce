import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:teal;
    height:50px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center
`
const Anouncement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Anouncement