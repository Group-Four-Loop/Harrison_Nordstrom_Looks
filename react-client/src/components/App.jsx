import React from 'react';
import Look from './Look.jsx';
import styled from 'styled-components';

const Container = styled.div`
  margin:1rem;
`;

const ComponentTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: Lato, sans-serif;
  font-weight: bold;
`;

const App = () => {
  // return (
  //   <Container>
  //     <ComponentTitle>
  //     LOOKS
  //     </ComponentTitle>
  //     <Look />
  //   </Container>
  // );
  return (
    <Look />
  );
};

export default App;