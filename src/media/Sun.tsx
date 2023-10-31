
import React from 'react';
import styled from 'styled-components';

export const SunIcon = () => {
  const Svg = styled.svg`
    width: 52.3vw;
    height: 90vh;
    top: -24vmin;
    right: -10vw;
    position: absolute;
    @media (max-width: 480px){
      width: 90.3vw;
    height: 87vmin;
    top: 32.4vmin;
    left: -23vw;
    position: absolute;
    }
  `
  return (
<Svg width="884" height="884" viewBox="0 0 884 884" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1_207" maskUnits="userSpaceOnUse" x="0" y="0" width="884" height="884">
<path d="M0 3.05176e-05H883.661V883.662H0V3.05176e-05Z" fill="white"/>
</mask>
<g mask="url(#mask0_1_207)">
<mask id="mask1_1_207" maskUnits="userSpaceOnUse" x="0" y="0" width="884" height="884">
<path d="M441.828 3.05176e-05C197.813 3.05176e-05 0 197.813 0 441.828C0 685.849 197.813 883.662 441.828 883.662C685.849 883.662 883.661 685.849 883.661 441.828C883.661 197.813 685.849 3.05176e-05 441.828 3.05176e-05Z" fill="white"/>
</mask>
<g mask="url(#mask1_1_207)">
<path d="M0 3.05176e-05H883.661V883.662H0V3.05176e-05Z" fill="#FFBD59"/>
</g>
</g>
</Svg>
  )
}
export default SunIcon
