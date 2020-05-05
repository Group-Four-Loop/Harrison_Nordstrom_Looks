import React from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
  position: absolute;
  display:flex;
  align-items:center;
  width:15%;
  height: 80%;
  left:0;
  opacity:1%;
  font-size:larger;
  &:hover {
    font-weight:bold;
    opacity: .5;
  }
`;

const LeftArrow = (props) => {
  return (
    <Arrow onClick={()=>{ props.shiftLeft(); }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="45" viewBox="-10 -10 31 45" ><defs><mask id="mask-left-arrow-l" x="-10" y="-10" width="31" height="45"><rect x="-10" y="-10" width="31" height="45" fill="white"/><path d="M1 12l11 11m0-22l-11 11" stroke="black" /></mask></defs><rect x="-10" y="-10" width="31" height="45" mask="url(#mask-left-arrow-l)" /><path d="M1 12l11 11m0-22l-11 11" /></svg>
    </Arrow>
  );
};

export default LeftArrow;