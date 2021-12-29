import styled, { css, keyframes } from 'styled-components'
import Timeselect from './Timselect';
import axios from 'axios'
import { toast } from 'react-toastify'
import React, { useState, useCallback } from 'react';

const invisible = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1; 
  }
`

const Buttonlink = styled.button`
  text-align: center;
  border: solid 1px transparent;
  border-radius: 6px;
  padding: 0.5em 1em;
  color: #F2D6A2;
  background-color: #2F3245;
  border: #F2D6A2;
  border-width: 1px;
  border-style: solid;
  font-family: 'Staatliches';
  font-size: 1.2rem;
  text-transform: lowercase;
  
  transition-duration: 0.7s;
  margin-top: 2%!important;  
  display:flex;
  opacity: 0;
  
  &:hover{
    transition-duration: 0.7s;
    color: #2F3245;
    border: #2F3245;
    border-width: 1px;
    border-style: solid;
    background-color : #F2D6A2 ;
  }

  ${props => {
        if (props.visible) {
            return css`
        opacity: 1;
        animation: 1s ${invisible} ease-in;
      `
        }
    }}
`

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  flex-direction: column;
  /* width: 10px; */
  ${props => {
        if (props.visible) {
            return `
        // background-color: white;
      `
        }
    }}
`
const Input = styled.input`
  opacity: 0;
  margin: 2px 0;
  padding: 0.5em 1em;
  color: white!important;
  background-color: rgba(0,0,0,0.0);
  
  border: solid 1px transparent;
  border-color: #2F3245;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  
  
  font-family: 'Major Mono Display';
  font-weight: 900;
  font-size: 1rem;
  text-transform: lowercase;
  
  &::placeholder {
    color: #FFF;
  }
  ${props => {
        if (props.visible) {
            return css`
        opacity: 1;
        animation: 1s ${invisible} ease-in;
      `
        }
    }
    }
`

const Passwordform = (props) => {

    const [time, setTime] = useState(0);
    const [password, setPassword] = useState("");

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = useCallback((e) => {
        props.setSpinner(true);
        e.preventDefault()
        axios.post(process.env.BACKEND + "password/create", { password: password, time: time })
            .then(res => {
                props.setResult(process.env.FRONT + "password/" + res.data.passwordData.uuid);
                props.setSpinner(false);
                props.setvisibleForm(false)
            })
            .catch(function (error) {
                toast.error("error while sending your password. Please try again");
                props.setSpinner(false);
            })
    })

    return (
        <form onSubmit={handleSubmit}>
        <FormWrapper visible={props.visibleForm}>
            <Input visible={props.visibleForm} type="text"
                placeholder="Password"
                value={password}
                onChange={passwordChange} type="password" required />
            <Timeselect setTime={setTime} visibleForm={props.visibleForm}/>
            <Buttonlink
                type="submit" visible={props.visibleForm}
            > Generate my link</Buttonlink>
        </FormWrapper>
    </form>
    )
}

export default Passwordform