import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

const arrow = keyframes`
  0% {
    transform: translateX(0em);
  }
  50% {
    transform: translateX(0.12em);
  }
  100% {
    transform: translateX(0em);
  }
`

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 49%;
  @media (max-width: 500px) {
  left: 43%;
  }

    transform: rotateZ(90deg)!important;
  .rotate {
    animation: 2s ease-in-out infinite ${arrow};
  }

`

const Arrow = () => {
    return (
        <ArrowContainer>
        <Image
          src="/arrow.svg"
          height={50}
          width={50}
          className="rotate"
        />
      </ArrowContainer>
    )
}

export default Arrow