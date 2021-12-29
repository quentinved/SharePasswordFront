import Header from './Header.js'
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import Spinner from './Spinner'
import Card from './Card'
import Arrow from './Arrow'
import Textwriter from './Textwriter'
import Passwordform from './Passwordform.js'
import { toast } from 'react-toastify';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    /* width: 300%; */
  }
  100% {
    opacity: 1;
    /* width: 100%; */
  }
`


const Tempo = styled.p`
  animation: 1s ${fadeIn} ease-in;
`

const WrapperHero = styled.div`
  position: relative;
  height: 100vh;
  width: 99.2vw;
  background-image: url('hero.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;

  `

const HeroText = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;
  color: white!important;
  
  font-family: 'Major Mono Display';
  text-transform: lowercase;
  
  p{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }

  @media (min-width: 501px) {
    font-size: 1.2rem;
  }

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1000px) {
    font-size: 3rem;
  }


`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

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
  font-size: 1.6rem;
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

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }

}

`

const Result = styled.span`
margin-top: 5%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1.2rem;
  animation: 1s ${fadeIn} ease-in;

`
const Clicktocopytext = styled.span`
  animation: 1s ${fadeIn} ease-in;
  margin-top: 5%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 0.8rem;
`

const Story = styled.div`
  display: flex;
  background: #2F3245;
  width: 100%;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
  flex-direction: column;

}
`
const Titlestep = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #2F3245;
    color: #918046;
`

const Home = () => {
    const steplist = [
        { number: "1", image: "/step1.svg", text: "I enter my password" },
        { number: "2", image: "/step2.svg", text: "I generate my link" },
        { number: "3", image: "/step3.svg", text: "I share it with the person of my choice" },
    ]

    const copyToClipboard = () => {
      navigator.clipboard.writeText(result)
      toast.success('Your link is sucessfully copy')
    }
 
    const [result, setResult] = useState("");
    const [visibleForm, setvisibleForm] = useState(false);
    const [spinner, setSpinner] = useState(false)

    return (
        <>
            <WrapperHero>
            <Header />
                <HeroText>
                    <Textwriter/>
                    <ButtonContainer>
                        <Button
                            onClick={() => { setvisibleForm(true); setResult(false) }
                            }> Start Now</Button>
                    </ButtonContainer>
                    {result && <><Result onClick={copyToClipboard}>{result}</Result>
                        <Clicktocopytext onClick={copyToClipboard}>click to copy</Clicktocopytext></>}
                    {!spinner ?
                        <Passwordform setSpinner={setSpinner} setResult={setResult} setvisibleForm={setvisibleForm} visibleForm={visibleForm}/>
                        :
                        <Spinner />
                    }
                    <Arrow />
                </HeroText>
            </WrapperHero>
            <Titlestep>
                <h2>Share password in 3 steps </h2>
            </Titlestep>
            <Story id="story">
                {
                    steplist.map((x) => {
                        return (
                            <Card key={x.number} number={x.number} image={x.image} text={x.text} />
                        )
                    })
                }
            </Story>
        </>
    )
}

export default Home