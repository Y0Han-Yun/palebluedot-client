import { Text, Input, Button, NewLink } from '../../components';
import { spacing } from '../../config/theme';
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  span {
    display: block;
  }
  * {
    margin-bottom: ${spacing['2']};
  }
`;
const NameOfPageWarpper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;
const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: ${spacing['0']};
  }
`;
const LinkWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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


class LoginForm extends React.Component {

  render () {
    return (<>
      <Wrapper>
        <NameOfPageWarpper>
          <Text lg>Sign In</Text>
        </NameOfPageWarpper>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div>
          <LinkWarpper>       
            <CheckboxWapper>
              <Input type="checkbox" />
              <Text>Remember me</Text>
            </CheckboxWapper>
            <ForgotPasswordWarpper>
              <NewLink to="/forgot">Forgot Password</NewLink>
            </ForgotPasswordWarpper>
            <RegiLinkWarpper>
              <NewLink to='/regi'><Text>Register</Text></NewLink>
            </RegiLinkWarpper>
          </LinkWarpper>
          <TestWrapper>
            <Button>Login</Button>
          </TestWrapper>
        </div>
      </Wrapper>
    </>);
  }

}

export default LoginForm;
