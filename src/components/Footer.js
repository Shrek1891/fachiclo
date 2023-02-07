import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <h5>&copy; {new Date().getFullYear()}
                <span> Fachiclo </span>
            </h5>
            <h5> All rights reserved </h5>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(244, 237, 26, 0.9893207282913166) 0%, rgba(90, 45, 253, 1) 100%);;
  text-align: center;

  span {
    color: var(--clr-white);
  }

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
