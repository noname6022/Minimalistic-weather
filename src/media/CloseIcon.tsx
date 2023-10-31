import React from 'react'
import styled from 'styled-components';

export const CloseIcon = () => {
    const Svg = styled.svg`
    width: 3.3vw;
        height: 9vh;
        background: none;
    outline: unset;
    margin: 0;
    padding: 0;
    border: 0;

    @media (max-width: 480px){
    width: 11.3vw;
    height: 5vh;
    background: none;
    outline: unset;
    margin: 0;
    padding: 0;
    border: 0;
    }
        `

  return (
    <Svg width="129px" height="129px" viewBox="0 0 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"/>

<g id="SVGRepo_iconCarrier"> <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#000000" stroke="#000000" stroke-width="3.12" stroke-linejoin="round"/> <path d="M29.6569 18.3431L18.3432 29.6568" stroke="white" stroke-width="3.12" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.3432 18.3431L29.6569 29.6568" stroke="white" stroke-width="3.12" stroke-linecap="round" stroke-linejoin="round"/> </g>

</Svg>
  )
}
export default CloseIcon
