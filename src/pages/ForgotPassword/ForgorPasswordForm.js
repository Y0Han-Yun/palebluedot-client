import { Text, Input, Button, NewLink } from '../../components';
import { spacing } from '../../config/theme';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo'

const Wrapper = styled.div`
  width: 1440px;
  height: 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);
  
  // span {
  //   display: block;
  // }
  * {
    margin-bottom: ${spacing['2']};
  }
`;
const SignInBox = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  margin: 0px;
  box-shadow: 4px 6px 13px 1px rgba(0,0,0,0.42);
  border-radius: 20px;
`;
const SignInWrapper = styled.div`
  width: 45%;
  height: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1D242B;
  border-radius: 0 20px 20px 0;
`;

const SignIn = styled.div`
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

const RegiLinkWarpper = styled.div`
  width: 100%;
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

const DescriptionWarpper =styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
`;
const InputWarpper = styled.div`
  margin-top: 30px;
`;
const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: ${spacing['0']};
  }
`;
class ForgotPasswordForm extends React.Component {

  render () {
    return (<>
      <Wrapper>
        <SignInBox>
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
          <SignInWrapper>
            <SignIn>
              <NameOfPageWarpper>
                <Text lg white>Forgot your password?</Text>
              </NameOfPageWarpper>
              <DescriptionWarpper>
                <Text sm white>We just need your registered email addess</Text>
              </DescriptionWarpper>
              <DescriptionWarpper>
                <Text sm white>to send you password reset</Text>
              </DescriptionWarpper>
              <InputWarpper>
                <Input type="text" placeholder="Email address" />
              </InputWarpper>
              <div>
                <RegiLinkWarpper>
                    <NewLink to='/regi'><Text white>Register</Text></NewLink>
                </RegiLinkWarpper>
                <TestWrapper>
                  <Button >Reset Password</Button>
                </TestWrapper>
              </div>
            </SignIn>
          </SignInWrapper>
        </SignInBox>
      </Wrapper>
    </>);
  }

}

export default ForgotPasswordForm;