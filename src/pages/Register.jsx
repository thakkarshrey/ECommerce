import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25)),url('images/pexels-arina-krasnikova-5418897.jpg') center;
    background-size:cover;
`

const Wrapper = styled.div` 
    width:40%;
    background-color:white;
    padding:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:20px
`

const Form = styled.div`
    display:flex;
    flex-wrap:wrap
`

const Button = styled.button`
    margin:10px;
    padding:20px 40px;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer
`

const Title = styled.h1`
    font-size:40px;
    font-weight:400;
    margin-left:10px
`

const Agrement = styled.p`
    margin:10px;
    font-size:20px;
    font-weight:300;
    word-wrap:break-word
`

const styles = {
    input:{
        margin:'10px',
        width:'46%'
    }
}

const Register = () => {
  return (
    <Container>
    <Wrapper>
    <Title>CREATE AN ACCOUNT</Title>
    <Form>
    <TextField sx={styles.input} fullWidth label="Name" size='small' variant="outlined" />
    <TextField sx={styles.input} fullWidth label="Last name" size='small' variant="outlined" />
    <TextField sx={styles.input} fullWidth label="User name" size='small' variant="outlined" />
    <TextField sx={styles.input} fullWidth label="Email" size='small' variant="outlined" />
    <TextField sx={styles.input} fullWidth label="Password" size='small' variant="outlined" />
    <TextField sx={styles.input} fullWidth label="Confirm password" size='small' variant="outlined" />
    <Agrement>By creating an account, I consent to the processing of my personal data in accordance with the PRIVACY POLICY.</Agrement>
    <Button>CREATE</Button>
    </Form>
    </Wrapper>        
    </Container>
  )
}


export default Register
