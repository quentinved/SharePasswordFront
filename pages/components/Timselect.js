import styled, { keyframes, css } from 'styled-components'

const invisible = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1; 
  }
`

const Wrapper = styled.select`
opacity: 0;
  display: flex;
  margin: 2px 0;
  padding: 0.5em 1em;
  color: white!important;
  margin-top: 2%;
  background-color: rgba(0,0,0,0.0);
  /* width: 10%;   */
  
  border: solid 1px transparent;
  border-color: #2F3245;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  
  
  font-family: 'Major Mono Display';
  font-weight: 900;

  font-size: 1rem;
  text-transform: lowercase;
  
  &:active {
    background-color: #2F3245;
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

const Timeselect = (props) => {
    
    const timeChange = (event) => {
        switch (event.target.value) {
            case '5 Minutes':
                props.setTime(5);
                break;
            case '30 Minutes':
                props.setTime(30);
                break;
            case '1 Heure':
                props.setTime(60);
                break;
            case '1 Jour':
                props.setTime(720);
                break;
            default:
                props.setTime(5)
        }
    }

    return(
        <Wrapper visible={props.visibleForm} onChange={timeChange} required>
        <option>
            Expiration
        </option>
        <option>
            5 Minutes
        </option>
        <option>
            30 Minutes
        </option>
        <option>
            1 Heure
        </option>
        <option>
            1 Jour
        </option>
    </Wrapper>
    )
}

export default Timeselect