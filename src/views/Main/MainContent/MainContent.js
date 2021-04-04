import React from 'react';
import styled from "styled-components";
import Header from './Header'
import PhotoAlbum from './PhotoAlbum'

const MainContent = () => {

  return (
    <React.Fragment>
    <Container>
        <HeaderContainer>
            <Header />
        </HeaderContainer>
        <PhotoAlbum />
    </Container>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
    height: 92vh;
    overflow-y: scroll;
    background: #1E1E1F;
    border-radius: 0.8rem;
`;

export default MainContent;