import Image from 'next/image'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

const NavBar = styled.nav`
    background-color: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition-duration: 2s;  
    border-style: none;

    ${props => {
        if (props.active) {
            return `
            border-bottom: #918046;
            border-width: 1px;
            border-style: solid;
            background-color: #2F3245;
              `
        }
    }
    }
`

const Navtext = styled.p`
    /* display: flex; */
    opacity: 0;
    margin: 10%;
    color: #918046;
    font-family: 'Major Mono Display';
    font-size: 1.3rem;
    font-weight: bold;
    transition-duration: 2s;

    @media (max-width: 768px) {
        display:none
    }

    ${props => {
        if (props.active) {
            return `
                opacity: 1;
              `
        }
    }
    }
`

export default function Header() {
    const [active, setActive] = useState(false)

    useEffect(
        function mount() {
            function changeBackground() {
                if (window.scrollY > 10)
                    setActive(true);
                else
                    setActive(false);
            }
            window.addEventListener("scroll", changeBackground);
            return function unMount() {
                window.removeEventListener("scroll", changeBackground);
            };
        });

    return (
        <>
            <NavBar active={active}>
                <Navtext active={active} onClick={() => {
                    document.getElementById('story').scrollIntoView({
                        behavior: 'smooth'
                    });
                }}>our story</Navtext>
                <Image
                    src="/logo.svg"
                    alt="Logo picture"
                    width="250"
                    height="140"
                    className="logo"
                />
                <Navtext active={active}>contact us</Navtext>
            </NavBar>
        </>
    )
}