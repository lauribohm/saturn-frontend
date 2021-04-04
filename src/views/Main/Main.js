import React from 'react';
import styled from "styled-components";
import Menu from './Menu/Menu'
import ImageActions from './ImageActions/ImageActions'
import MainContent from './MainContent/MainContent'

const Main = () => {

  return (
    <React.Fragment>
    <Container>
        <MenuWrapper>
            <Menu />
        </MenuWrapper>
        <ContentWrapper>
            <ActionsWrapper>
                <ImageActions/>
            </ActionsWrapper>
            <MainContent />
        </ContentWrapper>
    </Container>
    </React.Fragment>
  );
};

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 15%;
    min-width: 10rem;
    heigth: 100%;
    background: #242929;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 85%;
    height: 100%;
`;

const ActionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    min-heigth: 20rem;
    background: #272929;
`;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    height: 100vh;
    width: 100vw;
    background: #242929;
`;


export default Main;