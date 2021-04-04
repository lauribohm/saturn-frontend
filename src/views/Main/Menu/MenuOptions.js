import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { FaRegImages, FaWindowRestore } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegFolder } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { FaRegSun } from 'react-icons/fa'
import { FaRegShareSquare } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { IconContext } from "react-icons";

import { Link } from 'react-router-dom'

const MenuOptions = () => {

  const [activeItem, setActiveItem] = useState(window.location.pathname)
  const activeStyle = { background:  '#3E4243'};

  useEffect(() => {
    (async() => {
      const active = window.location.pathname
      setActiveItem(active)
    })()
  })

  const currentUser = localStorage.getItem('user')

  return (
    
    <React.Fragment>
      <Container>
        <HeaderWrapper>
          <Header>Photos</Header>
        </HeaderWrapper>
        <OptionWrapper style={activeItem === '/library' ? activeStyle : {} }>
            <IconContext.Provider value={{color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}}}>
              <IconWrapper> <FaRegImages/></IconWrapper>
            </IconContext.Provider>
            <Link to="/library" style={{color: 'white', textDecoration: 'none'}}><OptionName> Library </OptionName></Link>
        </OptionWrapper>
          <OptionWrapper style={activeItem === '/recent' ? activeStyle : {} }>
              <IconContext.Provider value={{ color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}  }}>
                <IconWrapper> <FaRegClock/></IconWrapper>
              </IconContext.Provider>
              <Link to="/recent" style={{color: 'white', textDecoration: 'none'}}> <OptionName>Recent</OptionName></Link>
          </OptionWrapper>
        <OptionWrapper style={activeItem === '/loved' ? activeStyle : {} }>
            <IconContext.Provider value={{ color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaRegHeart/></IconWrapper>
            </IconContext.Provider>
            <Link to="/loved" style={{color: 'white', textDecoration: 'none'}}><OptionName> Loved </OptionName></Link>
        </OptionWrapper>
        <OptionWrapper>
            <IconContext.Provider value={{ color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaRegTrashAlt/></IconWrapper>
            </IconContext.Provider>
            <OptionName> Bin </OptionName>
        </OptionWrapper>
        <SeperatorContainer>
          <Seperator />
        </SeperatorContainer>
        <HeaderWrapper>
          <Header>Albums</Header>
        </HeaderWrapper>
        <OptionWrapper>
            <IconContext.Provider value={{ color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaRegFolder/></IconWrapper>
            </IconContext.Provider>
            <OptionName> Albums </OptionName>
            <IconContext.Provider value={{ color: '#009BFF', size: '1rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaAngleRight/></IconWrapper>
            </IconContext.Provider>
        </OptionWrapper>
        <OptionWrapper>
            <IconContext.Provider value={{ color: '#009BFF', size: '1rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaPlus/></IconWrapper>
            </IconContext.Provider>
            <OptionName> Add album </OptionName>
        </OptionWrapper>
        <SeperatorContainer>
          <Seperator />
        </SeperatorContainer>
        <HeaderWrapper>
          <Header>User - {currentUser}</Header>
        </HeaderWrapper>
        <OptionWrapper>
            <IconContext.Provider value={{ color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaRegSun/></IconWrapper>
            </IconContext.Provider>
            <OptionName> Settings </OptionName>
        </OptionWrapper>
        <OptionWrapper>    
            <IconContext.Provider value={{ color: '#009BFF', size: '1.2rem', style : {marginLeft: '1rem'}  }}>
              <IconWrapper> <FaRegShareSquare/></IconWrapper>
            </IconContext.Provider>
            <Link to="/" style={{color: 'white', textDecoration: 'none'}}><OptionName> Logout </OptionName></Link>
        </OptionWrapper>
      </Container>
    </React.Fragment>
  )
}

const Seperator = styled.div`
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.seperatorLine};
  width: 70%;
`;

const SeperatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const OptionName = styled.p`
  font-size: 0.9rem;
  margin-left: 1rem;
  color: white;
`;

const Header = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 5%;
  color: ${({ theme }) => theme.hoverMenu}
`;

const HeaderWrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 90%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
  width: 90%;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
      background: ${({ theme }) => theme.hoverMenu};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export default MenuOptions;