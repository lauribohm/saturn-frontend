import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react'

import axios from 'axios'

const PhotoAlbum = () => {

    const [select, setSelect] = useState([])
    const [stop, setStop] = useState(4)
    const [records, setRecords] = useState([])
  
    useEffect(() => {
      (async() => {
        const result = await axios.get('/files')
        setRecords(result.data.files)
      })()
    }, [])

    console.log(window.location.pathname)
    window.addEventListener('resize', handleResize);

    function handleResize() {
      console.log(window.innerWidth)
      var iw = window.innerWidth
      if (iw < 900) {
        setStop(1)
      }
      if (iw > 900) {
        setStop(4)
      }
    }

    const activeStyle = {
      borderColor: '#009BFF',
      opacity: '0.6'
    }

      const ImageGrid = []
      var ImageRow = []
      var i = 0
      var count = 0

      records.forEach(element=> {

        var info = []
        info.push(element.id)
        info.push(element.timestamp)
        info.push(element.name)
        info.push(element.size)
        info.push(element.library)
        info.push(element.owner)

        ImageRow.push(
        <Image 
          key={element.id} 
          src={element.file_url} 
          alt={element.file_url}
          onClick={handleOneClick}
          onDoubleClick={handleDoubleClick}
          style={select === (element.file_url) ? activeStyle : {} }
        />)

        i++
        count++

        if (i===stop) {
          console.log('row')
          ImageGrid.push(ImageRow)
          ImageRow=[]
          i = 0
        }
      })
      ImageGrid.push(ImageRow)

    function handleOneClick(e) {
      console.log(e.target.alt)
      setSelect(e.target.alt)
      console.log(select)
    }

    function handleDoubleClick(e) {
      console.log(e.target.name)
      setSelect(e)
      console.log(select)
    }

  return (
    <React.Fragment>
    <Container>
        <GridContainer>
        {ImageGrid.map(row => (
          <RowContainer>{row.map(image=> (
            <ImageContainer>{image}</ImageContainer>
          ))}</RowContainer>
        ))}
      </GridContainer>
    </Container>
    </React.Fragment>
  );
};

const Image = styled.img`
    width: 18.5vw;
    height: 31.5vh;
    border: 3px solid;
    border-color: #1E1E1F;
    object-fit: cover;
    border-radius: 1rem;
    @media (max-width: 900px) {
      width: 60vw;
      height: 40vh;
    }
`;

const ImageContainer = styled.div`
    margin-left: 1rem;
`;

const RowContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    margin-bottom: 1rem;
    @media (max-width: 900px) {
      justify-content: center;
    }
`;

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height:100%;
    width: 100%;
    margin-left: 1rem;
    @media (max-width: 900px) {
      margin-left: 0rem;
    }
`;

export default PhotoAlbum;

