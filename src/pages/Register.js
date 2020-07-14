import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  background: lightgreen;
  width: 1440px;
  height: 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Registration = styled.div`
  width: 80%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;

const LogoSection = styled.div`
  background: lightgray;
  width: 50%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div``;

const DescriptionWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div``;

const RegiSection = styled.div`
  background: lightpink;
  width: 50%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetName = styled.input``;

const EmailWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetEmail = styled.input``;

const PassWordWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetPassword = styled.input``;

const SignUpWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.button``;

const GoLoginWarpper = styled.div`
  width: 100%;
  height: 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoLogin = styled.p``;

class Register extends React.Component {

  render () {
    return (<>
      <Container>
        <Registration>
          <LogoSection>
            <LogoWrapper>
              <Logo>Logo</Logo>
            </LogoWrapper>
            <DescriptionWrapper>
              <Description>Description</Description>
            </DescriptionWrapper>
          </LogoSection>
          <RegiSection>
            <NameWrapper>
              <GetName />
            </NameWrapper>
            <EmailWrapper>
              <GetEmail />
            </EmailWrapper>
            <PassWordWrapper>
              <GetPassword />
            </PassWordWrapper>
            <SignUpWrapper>
              <SignUpButton>Sign Up</SignUpButton>
            </SignUpWrapper>
            <GoLoginWarpper>
              <GoLogin>Go to Login</GoLogin>
            </GoLoginWarpper>
          </RegiSection>
        </Registration>
      </Container>
    </>);
  }

}

export default withRouter(Register);
