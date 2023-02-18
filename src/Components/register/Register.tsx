import React from 'react';
import styled from "styled-components";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../api/Api';
import { useAppDispatch } from '../global/Store';
import { login } from '../global/ReduxState';
import { useDispatch } from 'react-redux';



const Register = () => {

    const dispatch = useAppDispatch();

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    type formData = yup.InferType<typeof schema>

    const { 
            handleSubmit, 
            formState : {errors}, 
            reset, 
            register 
        } = useForm <formData>({
        resolver : yupResolver(schema)
    })

    const post = useMutation({
        mutationKey: ["postUser"],
        mutationFn: createUser,
        onSuccess: (data) => {
            dispatch(login(data.data));
        }
    })

    const Submit = handleSubmit((data : any) => {
        console.log(data);
        post.mutate(data);
        reset()
    })


  return (
    <Container>
        
        <Card onSubmit={Submit}>
            <h3 style={{color:"#500463", fontWeight: "600", fontSize:"20px"}}>Register</h3>

            <input {...register("name")} type="text" placeholder='Name' />
            <p>{errors?.name && errors?.name?.message}</p>

            <input {...register("email")} type="text" placeholder='Email'  />
            <p>{errors?.email && errors?.email?.message}</p>

            <input {...register("password")} type="password" placeholder='Password'  />
            <p>{errors?.password && errors?.password?.message}</p>

            <Button type="submit">Register</Button>
        </Card>
    </Container>
  )
}

export default Register

// const container = styled.div``;

// const container = styled.div``;

const Button = styled.button`
width: 100%;
height: 45px;
border: none;
background-color: #500463;
color: white;
border-radius: 20px;
margin-top: 25px;
cursor: pointer;
font-weight: 600;
`;

const Card = styled.form`
padding: 20px;
height: 350px;
width: 300px;
box-shadow: 0 0 3px gray;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
border-radius: 10px;

input{
    width: 100%;
    height: 35px;
    border: none;
    border-bottom: 1px solid gray;
    margin-top: 10px;
    border-radius: 0 0 6px 6px;
    padding-left: 10px;
}

p{
    font-size: 11px;
    /* margin-bottom: 5px; */
    color: blue;
}
`;

const Container = styled.div`
width: 100%;
height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
`;


