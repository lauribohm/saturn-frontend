import React from 'react'
import styled from "styled-components";
import { FaPlus } from 'react-icons/fa'
import { IconContext } from "react-icons";

const AddPhotosButton = () => {

  return (
    <React.Fragment>
    <Container>
        <Button>
            <IconContext.Provider value={{color: '#009BFF', size: '1rem', style : {marginLeft: '1rem'}}}>
                <IconWrapper> <FaPlus/></IconWrapper>
            </IconContext.Provider>
            <Text>Add Photos </Text>
        </Button>
    </Container>
    </React.Fragment>
  );
};

const Text = styled.p`
    font-size: 0.9rem;
    margin-left: 0.6rem;
    margin-right: 1rem;
    color: white;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid;
    border-color: ${({ theme }) => theme.seperatorLine};
    border-radius: 0.7rem;
    height: 2.5rem;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: ${({ theme }) => theme.seperatorLine};
        color: blue;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`;

export default AddPhotosButton;

