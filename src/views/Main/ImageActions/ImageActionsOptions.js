import React from 'react'
import styled from "styled-components";
import { FaInfoCircle } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { FaFolderPlus } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ImageActionsOptions = () => {

  return (
    <React.Fragment>
      <Container>
        <ActionWrapper>
            <IconContext.Provider value={{color: '#9E9F9F', size: '1.2rem'}}>
                <IconWrapper> <FaInfoCircle/></IconWrapper>
            </IconContext.Provider>
        </ActionWrapper>
        <ActionWrapper>
            <IconContext.Provider value={{color: '#9E9F9F', size: '1.2rem'}}>
                <IconWrapper> <FaRegHeart/></IconWrapper>
            </IconContext.Provider>
        </ActionWrapper>
        <ActionWrapper>
            <IconContext.Provider value={{color: '#9E9F9F', size: '1.2rem'}}>
                <IconWrapper> <FaFolderPlus/></IconWrapper>
            </IconContext.Provider>
        </ActionWrapper>
        <ActionWrapper>
            <IconContext.Provider value={{color: '#9E9F9F', size: '1.2rem'}}>
                <IconWrapper> <FaShareAlt/></IconWrapper>
            </IconContext.Provider>
        </ActionWrapper>
        <ActionWrapper>
            <IconContext.Provider value={{color: '#9E9F9F', size: '1.2rem'}}>
                <IconWrapper> <FaRegTrashAlt/></IconWrapper>
            </IconContext.Provider>
        </ActionWrapper>
      </Container>
    </React.Fragment>
  )
}

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 2rem;
    &:hover {
      background: ${({ theme }) => theme.hoverMenu};
      background-opacity: 0.3;
    }
    @media (max-width: 900px) {
      margin-left: 0.3rem;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: flext-start;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 4rem;
    @media (max-width: 900px) {
      margin-left: 1rem;
      justify-content: center;
    }
`;

export default ImageActionsOptions;