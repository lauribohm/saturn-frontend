import React, { useState, useEffect }from 'react';
import styled from "styled-components";
import { Redirect } from 'react-router';

import axios from 'axios'

import Lion from '../../assets/Images/Lion.jpg'


export const Landing = () => {

    const [select, setSelect] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')

    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')
    
    const [respond, setRespond] = useState('')

    const activeHeaderStyle = {
        borderColor: '#009BFF'
    }

    const activeFormStyle = {
        display: 'none'
    }

    function ChangeSelect() {
        setSelect(!select)
        setMessage('')
    }

    useEffect(() => {
        localStorage.removeItem('user')
    }, [])

    const HandleSubmit = async event => {

        setMessage('')
        event.preventDefault()

        if (select === false) {
            console.log('login')
            if (username !== '') {
                if (password !== '') {
                    console.log('all good')

                    // all good for db check
                    axios.post('/login', {
                        params: {
                            username,
                            password
                        }
                      })
                      .then(function (response) {
                        setRespond(response.data)
                      })
                      .catch(function (error) {
                        console.log(error);
                      })
                      .then(function () {
                        console.log('query done')
                        console.log(respond)
                        CheckCredentials()
                      });  
                }
                else { setMessage('Check the password') }
            }
            else { setMessage('Check the username') }
        }

        else {
            console.log('signup')
            if (username !== '') {
                if (password && passwordR === '') {
                    setMessage('Check the passwords')
                }
                else {
                    if (password !== passwordR) {
                        console.log('not a match')
                        setMessage('Passwords dont match')
                    }
                    else { 
                        console.log('all good')
                        // all good for db action!
                        axios.post('/signup', {
                            params: {
                                username,
                                password
                            }
                        })
                        .then(function (response) {
                            setRespond(response.data)
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                        .then(function () {
                            console.log('query done')
                            console.log(respond)
                            ThenLogin()
                        }); 
                    }
                }
            }
            else { setMessage('Check the username') }
        }
    }

    function ThenLogin() {
        setSelect(!select)
        setSuccess('User created - you may now log in')
    }

    function CheckCredentials() {
        if (respond === 'correct') {
            console.log('redirect')
        }
        else {setMessage('Credentials incorrect')}
    }
    if (respond === 'correct') {
        localStorage.setItem('user', username)
        return (<Redirect push to="/library" />)
    }

  return (
    <React.Fragment>
        <ContentWrapper>
            <Image src={Lion} />
            <Form>
                <HeaderContainer>
                <Header style={select ? activeHeaderStyle : {} } onClick={ChangeSelect} > Sign up </Header>
                <Header style={select ? {} : activeHeaderStyle } onClick={ChangeSelect} > Log in </Header>
                </HeaderContainer>
                <SuccessMsg> { success } </SuccessMsg>
                <Info> Username </Info>
                <Field type='text' required value={username} onChange={e => setUsername(e.target.value)}/>
                <Info> Password </Info>
                <Field type='password' required value={password} onChange={e => setPassword(e.target.value)}/>
                <Info style={select ? {} : activeFormStyle }> Repeat password </Info>
                <Field type='password' required style={select ? {} : activeFormStyle } value={passwordR} onChange={e => setPasswordR(e.target.value)}/>
                <InfoMsg> {message} </InfoMsg>
                <Button onClick={HandleSubmit}> <Info> Log in </Info></Button>
            </Form>
        </ContentWrapper>
    </React.Fragment>
  );
};

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
    transition: all 0.6s ease-in-out;
    margin-top: 2rem;
    margin-bottom: 2rem;
    &:hover {
        background: ${({ theme }) => theme.gradientPrimary};
        border-color: black;
    }
`;

const InfoMsg = styled.p`
    font-size: 1rem;
    color:red;
    margin-top: 1rem;
`;

const SuccessMsg = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.icon};
    margin-top: 1rem;
`;

const Field = styled.input`
    type: password;
    font-size: 1.2rem;
    color:white;
    heigth: 10rem;
    width: 10rem;
    background: none;
    border: none;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.icon}; 
    padding-top: 0.5rem;
    padding-right: 4rem;
    
`;

const Info = styled.p`
    font-size: 1rem;
    color:white;
    margin-top: 1rem;
`;

const Header = styled.p`
    font-size: 1.2rem;
    color:white;
    border: 1px solid;
    border-color: ${({ theme }) => theme.seperatorLine};
    border-radius: 1rem;
    width: 50%;
    padding: 1rem;
    &:nth-of-type(1) {
        border-right: none;
    }
    &:nth-of-type(2) {
        border-left: none;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    heigth: 50vh;
    width: 30vw;
    border-radius: 2rem;
    background: black 0.7;
    margin-top: 16rem;
    @media (max-width: 1200px) {
        background: black;
        opacity: 0.9;
        display: flex;
        flex-direction: column;
        align-items: center;
        heigth: 50vh;
        width: 50vw;
    }
    @media (max-width: 800px) {
        heigth: 70vh;
        width: 80vw;
    }
`;

const Image = styled.img`
    max-height: 100vh;
    min-width: 100vw;
    object-fit: cover;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: start;
    width: 100vw;
    height: 100vh;
    @media (max-width: 1200px) {
        justify-content: center;
        align-items: start;
      }
`;

export default Landing;