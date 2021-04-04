import React from 'react'
import styled from 'styled-components';
import ImageActionsOptions from './ImageActionsOptions'
import AddPhotosModal from './AddPhotosModal'

const ImageActions = () => {

  return (
    <React.Fragment>
      <Container>
          <AddPhotosModal />
          <ImageActionsOptions />
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    margin-left: 2rem;
    height: 100%;
    width: 100%;
    @media (max-width: 900px) {
      margin-left: 0rem;
    }
    @media (max-width: 600px) {
      margin-left: 0rem;
      flex-direction: column;
    }
`;

export default ImageActions;