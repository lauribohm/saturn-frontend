import React from 'react'
import styled from 'styled-components';
import MenuOptions from './MenuOptions'

const Menu = () => {
  
  return (
    <React.Fragment>
      <Container>
          <MenuOptions />
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  height: 90vh;
  width: 100%;
`;

export default Menu;