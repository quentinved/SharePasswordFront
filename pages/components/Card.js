import styled from 'styled-components'
import Image from 'next/image'


const Steptext = styled.h3`
  color: #2F3245;
  font-family: Roboto;
  font-size: 1rem;
`

const Wrapper = styled.div`
background: #918046;
width: 25%;
height: 225px;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
border-radius: 6px;
margin-bottom: 3%;
margin-top: 3%;

@media (max-width: 768px) {
  width: 80%;
    
}

.stepimg {
  margin-bottom: 10%;
}
`

const Dot = styled.div`
border-radius: 50%;
width: 34px;
height: 34px;
padding: 10px;
background: #2F3245;
border: 3px solid #918046;
color: #918046;
text-align: center;
display: flex;
align-items: center;
`

const Wrappertext = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
`

const Card = (props) => {
  return (
    <Wrapper>
      <Dot> {props.number} </Dot>
      <Image
        src={props.image}
        height={50}
        width={50}
        className="stepimg"
      />
      <Wrappertext>
        <Steptext> {props.text} </Steptext>
      </Wrappertext>
    </Wrapper>
  )
}

export default Card