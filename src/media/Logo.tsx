import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
  const Svg = styled.svg`
        width: 4.3vw;
    height: 13vh;
    @media (max-width: 480px) {
      width: 11.3vw;
    height: 10vh;
    }
  `
  return (
    <Svg width="61" height="106" viewBox="0 0 61 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1573 105.902H21.8396L30.5688 84.4126L39.3656 105.704H41.1104L60.725 56.8813H49.9125L40.2406 81.3918L30.8396 57.3501H30.3656L20.9646 81.3918L11.2927 56.8813H0.480225L20.1573 105.902Z" fill="black"/>
<path d="M48.3345 55.0609L45.772 22.8942H45.4386L34.3345 54.7275H26.9595L15.8345 22.8942H15.5011L12.9386 55.0609H0.584473L5.43864 0.790039H18.6053L30.647 32.1025L42.6886 0.790039H55.8345L60.7095 55.0609H48.3345Z" fill="black"/>
</Svg>
  )
}
export default Logo


