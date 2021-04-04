import React, {useState} from 'react';
import Modal from 'react-modal';
import AddPhotosButton from './AddPhotosButton'
import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import { FaCameraRetro } from 'react-icons/fa'
import { IconContext } from "react-icons";
import axios from 'axios'

const AddPhotosModal = () => {
    
    var subtitle;

    const [file, setFile] = useState([])
    const [description, setDescription] = useState("")
    const [name, setName] = useState('')
    const [preview, setPreview] = useState('')

    const [records, setRecords] = useState([])
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const username = localStorage.getItem('user')

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'white';
    }
    
    function closeModal(){
        setIsOpen(false);
        setFile('')
        setPreview('')
        setDescription('')
        setName('')
    }

    const hiddenFileInput = React.useRef(null);

    const handleFileInput = event => {
      hiddenFileInput.current.click();
    };
  
    const submit = async event => {
  
      event.preventDefault()
      closeModal()
      console.log(file)
  
      var FormData = require('form-data')
      const formdata = new FormData()
  
      console.log(file.name)
      console.log(file.type)
  
      formdata.append('file', file)
      formdata.append('name', file.name)
      formdata.append('type', file.type)
      formdata.append('owner', username)
  
      console.log(Array.from(formdata))
  
      const result = await axios.post('/files', formdata )
      setRecords([result.data, ...records])
    }

    function onUploadChange(f) {
      setFile(f)
      var pre = URL.createObjectURL(f)
      setPreview(pre)
    }
 
    return (
      <React.Fragment>
        <BtnWrapper onClick={openModal}>  
            <AddPhotosButton/>
        </BtnWrapper>
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
              top: '35%',
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
              width: '35rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start'

            }
          }}
        >
          
          <Container>
              <HeaderWrapper>
                <HeaderIconWrapper> 
                  <IconContext.Provider value={{color: 'white', size: '1.3rem'}}>
                      <IconWrapper> <FaCameraRetro/></IconWrapper>
                  </IconContext.Provider>
                </HeaderIconWrapper>
                <Header ref={_subtitle => (subtitle = _subtitle)}> Add photos to library </Header>
            </HeaderWrapper>
            <IconContext.Provider value={{ color: '#9E9F9F', size: '1.2rem', style : {transform: 'rotate(45deg)'}}}>
                <CloseIconWrapper onClick={closeModal}> <FaPlus/></CloseIconWrapper>
            </IconContext.Provider>
          </Container>
          <ContentContainer> 
            <ImageSelectContainer>
            <Button onClick={handleFileInput}> 
              <IconContext.Provider value={{color: '#009BFF', size: '1rem', style : {marginLeft: '1rem'}}}>
                  <IconWrapper> <FaPlus/></IconWrapper>
              </IconContext.Provider>
              <Text> Select photo </Text>
            </Button>
            <Input
              filename={file} 
              onChange={e => onUploadChange(e.target.files[0])} 
              ref={hiddenFileInput}
              type="file"
              accept="image/*" 
            />  
            <Image src={preview}/>
            </ImageSelectContainer>
            <ImageInfoContainer>
              <TextField
                type='text'
                placeholder='Description (optional)'
              >
              </TextField>
              <TextField
                type='text'
                placeholder='Name (optional)'
              >
              </TextField>
              <SubmitButton type = 'submit' onClick={submit}> 
                <Text> Submit </Text>
              </SubmitButton>
            </ImageInfoContainer>
          </ContentContainer>
        </Modal>
      </React.Fragment>
    );
}

const Image = styled.img`
  max-width: 9.5rem;
  max-heigth: 9.5rem;
  margin-top: 1rem;
  border-radius: 1rem;

`;

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

const HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.icon};
  margin-right: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    width: 90%;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 90%;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: end;
    @media (max-width: 900px) {
      margin-top: 1rem;
    }
`;

export default AddPhotosModal;