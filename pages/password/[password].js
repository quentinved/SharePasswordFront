import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled, { keyframes, css } from 'styled-components'
import Header from '../components/Header.js'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'


const Crypto = require('../../utils/decrypt.js');


const hero = keyframes`
    0% {
      background-position:0% 50%
    }
    50% {
      background-position:100% 50%
    }
    100% {
      background-position:0% 50%
    }
`

const WrapperHero = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(270deg, #f2d6a2, #2f3245);
  background-size: 400% 400%;
  background-repeat: no-repeat;
  background-position: bottom center;
  animation: ${hero} 20s ease infinite;
  `

const Thankyou = styled.p`
color: white!important;
  
font-family: 'Major Mono Display';
font-size: 2rem;
text-transform: lowercase;

`

const Expired = styled.p`
color: white!important;
  
font-family: 'Major Mono Display';
font-size: 1.5rem;
text-transform: lowercase;

`
const HeroText = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;

`

const Passwordinput = styled.input`
  margin: 2px 0;
  padding: 0.5em 1em;
  color: white!important;
  background-color: rgba(0,0,0,0.0);
  
  border: solid 1px transparent;
  border-color: #2F3245;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  
  
  font-family: 'Staatliches';
  font-weight: 100!important;
  font-size: 1.2rem;
  text-transform: lowercase;
  
    text-align: center;
`

const Inputwrapper = styled.div`
margin-top: 5%;
  display: flex;
  justify-content: center;
`
const Clicktocopytext = styled.span`
color: white!important;
font-family: 'Major Mono Display';
font-size: 0.7rem;
text-transform: lowercase;
margin-top: 1%;
`
const Button = styled.button`
  text-align: center;
  border: solid 1px transparent;
  border-radius: 6px;
  padding: 0.5em 1em;
  color: #F2D6A2;
  background-color: rgba(0,0,0,0.0);
  border: #2F3245;
  border-width: 1px;
  border-style: solid;
  font-family: 'Staatliches';
  font-size: 1rem;
  text-transform: lowercase;
  transition-duration: 0.7s;
  
  &:hover{
    transition-duration: 0.7s;
    color: #F2D6A2;
    border: #F2D6A2;
    border-width: 1px;
  border-style: solid;
    background-color : #2F3245 ;
  }

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const Post = (response) => {
  const router = useRouter();
  const [uuid, setUuid] = useState(null);
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    setUuid(router?.query?.password)
    if (uuid) {
      axios.get(process.env.BACKEND + "password/" + uuid)
      .then(res => {
        console.log('test', res)
          const final = Crypto.decrypt(res.data.result.password)
          setPassword(final)
          setSpinner(false)
        })
        .catch(function (error) {
          setExpired(true)
          setSpinner(false)
          setError("Error occured during the fetch of your password")
        })
    }
  }, [uuid, router]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
    toast.success('Your link is sucessfully copy')
  }

  return (
    <>
      <Header />
      <WrapperHero>
        <HeroText>
          <Thankyou>
            Merci d'avoir utiliser SharePassword
          </Thankyou>
          {
            () => {
              if (!spinner && !expired) {
                return (
                  <>
                    <Inputwrapper>
                      <Passwordinput
                        value={password}
                        disabled
                        type="password"
                      >
                      </Passwordinput>
                    </Inputwrapper>
                  </>
                )
              }
              else if (spinner && !expired) {
                return (<Spinner />)
              }
              else {
                return (<h3> Your link is expired or never existed</h3>)
              }
            }
          }
          {expired && <Expired> Your link is expired or never existed</Expired>}
          {!spinner && !expired ? <Inputwrapper>
            <Passwordinput
              value={password}
              disabled
              type="password"
            >
            </Passwordinput>
          </Inputwrapper> : !expired && <Spinner />}
          {!expired ? <Clicktocopytext onClick={copyToClipboard}>click to copy</Clicktocopytext> : <ButtonContainer> <Button onClick={() => window.location.pathname = "/"}> Revenir a l'acceuil</Button> </ButtonContainer>}
        </HeroText>
      </WrapperHero>
    </>
  )
}

export default Post