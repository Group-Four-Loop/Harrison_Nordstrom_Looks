import React from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
  display:flex;
  align-items:center;
  width:15%;
  position: absolute;
  height: 80%;
  right:0;
  opacity:1%;
  font-size:larger;
  &:hover {
    font-weight:bold;
    opacity: .5;
  }
`;

const RightArrow = (props) => {
  return (
    <Arrow onClick={()=>{ props.shiftRight(); }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="45" viewBox="-10 -10 31 45" ><defs><mask id="mask-right-arrow-l" x="-10" y="-10" width="31" height="45"><rect x="-10" y="-10" width="31" height="45" fill="white"/><path d="M12 12l-11-11m0 22l11-11" stroke="black" /></mask></defs><rect x="-10" y="-10" width="31" height="45" mask="url(#mask-right-arrow-l)" /><path d="M12 12l-11-11m0 22l11-11" /></svg>
    </Arrow>
  );
};

export default RightArrow;