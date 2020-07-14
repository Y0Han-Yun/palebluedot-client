import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: lightpink;
  width: 1440px;
  height: 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;

const LeftSide = styled.div`
  background: lightblue;
  width: 65%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background: lightyellow;
  width: 45%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;

const LogoSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40%;
`;

const Logo = styled.div``;

const EmailSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 10%;
`;

const GetEmail = styled.input`
  outline: none;
  width: 300px;
  height: 30px;
`;

const PassWordSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 10%;
`;

const GetPassWord = styled.input`
  outline: none;
  width: 300px;
  height: 30px;
`;

const CheckBoxSection = styled.div`
  display: flex;
  height: 10%;
`;

const SaveIdPassCheckBox = styled.input`
  margin-left: 60px;
  border: 0px;
  padding: 0px;
  height: 30%;
`;

const SaveIdPassBoxDescription = styled.p`
  margin: 3px 0px 0px 3px;
  border: 0px;
  padding: 0px;
  height: 30%;
  font-size: 13px;
`;

const ButtonSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 20%;
`;

const LoginButton = styled.button`
  width: 300px;
  background: #1AAB8A;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  :hover {
    background: #fff;
    color: #1AAB8A;
  }
  :before, :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1AAB8A;
    transition: 400ms ease all;
  }
  :after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  :hover:before, :hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

const GoregiSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 10%;
`;

const GoRegister = styled.p``;

const RightSide = styled.div`
  background: lightpink;
  width: 35%;
  height: 100%;
  display: flex;
`;

const Description = styled.p``;

class Home extends React.Component {

  render () {
    return (<>
      <Container>
        <LeftSide>
          <LoginBox>
            <LogoSection>
              <Logo>Logo</Logo>
            </LogoSection>
            <EmailSection>
              <GetEmail placeholder="Email" size="40" />
            </EmailSection>
            <PassWordSection>
              <GetPassWord placeholder="Password" size="40" />
            </PassWordSection>
            <CheckBoxSection>
              <SaveIdPassCheckBox type="checkbox" />
              <SaveIdPassBoxDescription>Do you want to Save your Email and Password?</SaveIdPassBoxDescription>
            </CheckBoxSection>
            <ButtonSection>
              <LoginButton>Login</LoginButton>
            </ButtonSection>
            <GoregiSection>
              <GoRegister>Go to Register</GoRegister>
            </GoregiSection>
          </LoginBox>
        </LeftSide>
        <RightSide>
          <Description>Description</Description>
        </RightSide>
      </Container>
    </>);
  }

}

export default withRouter(Home);
