import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import { FaRegImage } from 'react-icons/fa'
import { IconContext } from "react-icons";
import axios from 'axios'

const PhotoViewModal = ({file}) => {
    
    var subtitle;

    const [modalIsOpen,setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'white';
    }
    
    function closeModal(){
        setIsOpen(false);
    }
 
    return (
      <React.Fragment>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            },
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              background: '#242929',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0.4rem',
              border: 'none',
              outline: 'none',
              padding: '20px',
              height: '50vh',
              width: '70vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start'

            }
          }}
        >
          
          <Container> 
            <Header ref={_subtitle => (subtitle = _subtitle)}> Photo </Header>
            <IconContext.Provider value={{ color: '#9E9F9F', size: '1.2rem', style : {transform: 'rotate(45deg)'}}}>
                <CloseIconWrapper onClick={closeModal}> <FaPlus/></CloseIconWrapper>
            </IconContext.Provider>
          </Container>
          <ContentContainer> 
            <Image 
                key={file.alt} 
                src={file.alt} 
                alt='@ Photo from AWS S3'
            />)
          </ContentContainer>
        </Modal>
      </React.Fragment>
    );
}

const TextField = styled.input`
  color: white;
  width: 100%;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.seperatorLine};
  background-color: #242929; 
  &:nth-of-type(2) {
    margin-top: 1rem;
  }
  &:focus,
  &:active {
  border: red;
  border-shadow: none;
  }  
`;

const Input = styled.input`
  display: none;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.seperatorLine};
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: red;
  }
`;

const Text = styled.p`
    font-size: 0.9rem;
    margin-left: 0.6rem;
    margin-right: 1rem;
    color: white;
`;

const Button = styled.div`
    color: white;
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
    transition: all 0.3s ease-in-out;
    &:hover {
        background: ${({ theme }) => theme.seperatorLine};
    }
`;

const SubmitButton = styled.div`
    margin-top: 1rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.seperatorLine};
    border-radius: 0.7rem;
    height: 2.5rem;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: ${({ theme }) => theme.gradientPrimary};
    }
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

const ImageInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 60%;
`;

const ImageSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 40%;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    margin-bottom: 2rem;
    width: 80%;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    width: 80%;
`;

export default PhotoViewModal;