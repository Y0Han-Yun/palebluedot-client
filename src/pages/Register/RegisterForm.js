import { Text, Input, Button, NewLink } from '../../components';
import { spacing } from '../../config/theme';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo'

const Wrapper = styled.div`
position: fixed;
width: 100%;
height: 100%;
margin: 0px;
border: 0px;
padding: 0px;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);

* {
  margin-bottom: ${spacing['2']};
}
`;

const RegisterBox = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  margin: 0px;
  box-shadow: 4px 6px 13px 1px rgba(0,0,0,0.42);
  border-radius: 20px;
`;
const RegisterWrapper = styled.div`
  width: 45%;
  height: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1D242B;
  border-radius: 0 20px 20px 0;
`;

const Register = styled.div`
  width: 80%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const NameOfPageWarpper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: ${spacing['0']};
  }
  padding-top: 100px;
`;
const LinkWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;
const CheckboxWapper = styled.div`
  span {
    display: inline;
  }
  width: 50%;
`;
const ForgotPasswordWarpper =styled.div`
  width: 35%;
  display: flex;
`;
const RegiLinkWarpper = styled.div`
  width: 20%;
  justify-content: flex-end;
  display: flex;
`;
const IntroductionWrapper = styled.div`
  width: 55%;
  height: 100%;
  margin: 0px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0 0 20px;
`;
const Introduction = styled.div`
  width: 80%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class RegisterForm extends React.Component {

  render () {
    return (<>
      <Wrapper>
        <RegisterBox>
          <IntroductionWrapper>         
            <Introduction>
              <div>
                <Logo />
              </div>
              <div>
                <Text lg normal>Pale Blue Dot</Text><br/>
              </div>
              <div>
                <Text sm >The paperless invoice</Text>                     
              </div>
            </Introduction>
          </IntroductionWrapper>
          <RegisterWrapper>
            <Register>
              <NameOfPageWarpper>
                <Text lg white>Register</Text>
              </NameOfPageWarpper>
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              <div>
                <LinkWarpper>       
                  <CheckboxWapper/>
                  <ForgotPasswordWarpper>
                    <NewLink to="/forgot"><Text white>Forgot Password</Text></NewLink>
                  </ForgotPasswordWarpper>
                  <RegiLinkWarpper>
                    <NewLink to='/'><Text white>Sign In</Text></NewLink>
                  </RegiLinkWarpper>
                </LinkWarpper>
                <ButtonWrapper>
                  <Button>Register</Button>
                </ButtonWrapper>
              </div>
            </Register>
          </RegisterWrapper>
        </RegisterBox>
      </Wrapper>
    </>);
  }
}

export default RegisterForm;



 