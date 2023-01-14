import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
// import { useContext } from 'react';
// import {AuthContext} from '../store/auth-context'
import { Navigate, useNavigate } from 'react-router-dom';
import { AppRoutingConfig } from '../configs/AppRoutingConfig';


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
    width:30%;
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
    cursor:pointer;
    width:45%
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
    }
}

const Link = styled.a`
    font-size:16px;
    font-weight:400;
    text-decoration:underline;
    margin:5px 0 0 10px;
    cursor:pointer

`

const LinkContainer = styled.div`
    display:flex;
    flex-direction:column
`

const Login = () => {

    // const authContext = useContext(AuthContext);
    // const navigate = useNavigate()
    // const {isAuthenticated} = authContext;

    /* Schema validation for textfields */
    const schema = yup.object().shape({
        userName:yup.string().required('User name is required'),
        password:yup.string().required('Password is required')
    })
    /* Schema validation for textfields */

    /* React form dependencies */
    const defaultValues = {
        userName:'',
        password:''
    }
    const {control,reset,register,handleSubmit,formState,getValues,setValue} = useForm({
        defaultValues,
        mode:"all",
        resolver:yupResolver(schema)    
    })
    const {errors,dirtyFields} = formState
    /* React form dependencies */

    // useEffect(()=>{
    //     if(isAuthenticated === true){
    //         navigate(AppRoutingConfig.APP_URL_HOME)
    //         return;
    //     }
    // },[])

  return (
    <Container>
    <Wrapper>
    <Title>SIGN IN</Title>
    <Form>
        <Controller
        name="userName"
        control={control}
        render={({field})=>(
            <TextField 
            {...field}
            sx={styles.input}  
            label="User name" 
            size='small' 
            variant="outlined" 
            error={!!errors?.userName}
            helperText={errors.userName && errors.userName?.message}
            fullWidth
            required
            />
        )}
        />

        <Controller
        name="password"
        control={control}
        render={({field})=>(
            <TextField 
            {...field}
            sx={styles.input}  
            label="Password" 
            type="password"
            size="small"
            variant="outlined" 
            error={!!errors?.password}
            helperText={errors.password && errors.password?.message}
            fullWidth
            required
            />
        )}
        />
    <LinkContainer>
    <Button>LOGIN</Button>
    <Link>FORGOT PASSWORD? </Link>
    <Link>CLICK HERE TO CREATE AN ACCOUNT</Link>
    </LinkContainer>
    </Form>
    </Wrapper>        
    </Container>
  )
}


export default Login
