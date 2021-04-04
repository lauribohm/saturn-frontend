import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios'

const Header = () => {

  const [file, setFiles] = useState([]);
  const [info, setInfo] = useState('')

  const [activeItem, setActiveItem] = useState(window.location.pathname)

  useEffect(() => {
    if (window.location.pathname === '/library') {
      setActiveItem('Library')
      setInfo('All your photos')
    }
    if (window.location.pathname === '/recent') {
      setActiveItem('Recent')
      setInfo('Photos added within a week')
    }
    if (window.location.pathname === '/loved') {
      setActiveItem('Loved')
      setInfo('Photos you love')
    }
    if (window.location.pathname === '/bin') {
      setActiveItem('Bin')
      setInfo('Photos deleted - these will be deleted automatically in 30 days')

    }
  }, [window.location.pathname])

  useEffect(() => {
    (async() => {
      const result = await axios.get('/files')
      setFiles(result.data.files)
    })()
  }, [])

  var calculate = 0
  file.forEach(element=> {
    calculate++
    console.log(calculate)
  })

  return (
    <React.Fragment>
    <Container>
        <Wrapper>
        <Head>{activeItem}</Head>
        </Wrapper>
        <Info>{calculate} photos</Info>
    </Container>
    </React.Fragment>
  );
};

const Head = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin:0px;
`;

const Info = styled.p`
    font-size: 0.9rem;
    color: white;
    &:nth-of-type(2) {
      margin-left: 2rem;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    &:nth-of-type(2) {
      margin-left: 2rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
`;

export default Header;