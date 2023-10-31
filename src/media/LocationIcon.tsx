
import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
  const Svg = styled.svg`
width: 3.3vw;
    height: 9vh;
    @media (max-width: 480px){
      width: 6.3vw;
    height: 9vh;
    }
  `
  return (
<Svg width="46" height="66" viewBox="0 0 46 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3021 0.067688C10.875 0.067688 0.802063 10.2604 0.802063 22.8177C0.802063 39.8802 23.3021 65.0677 23.3021 65.0677C23.3021 65.0677 45.8021 39.8802 45.8021 22.8177C45.8021 10.2604 35.7239 0.067688 23.3021 0.067688ZM23.3021 30.9427C18.8646 30.9427 15.2656 27.3021 15.2656 22.8177C15.2656 18.3333 18.8646 14.6927 23.3021 14.6927C27.7344 14.6927 31.3333 18.3333 31.3333 22.8177C31.3333 27.3021 27.7344 30.9427 23.3021 30.9427Z" fill="black"/>
</Svg>
  )
}
export default Logo
