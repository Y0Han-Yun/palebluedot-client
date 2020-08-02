import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Text, Input, Button, NewLink } from '../../components';
import { spacing } from '../../config/theme';

const Wrapper = styled.div`
  span {
    display: block;
  }
  * {
    margin-bottom: ${spacing['2']};
  }
`;
const NameOfPageWarpper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
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
const RegiLinkWarpper = styled.div`
  justify-content: flex-end;
  display: flex;
`;

class ForgotPasswordForm extends React.Component{
  render () {
    return (<>
      <Wrapper>
        <NameOfPageWarpper>
          <Text lg>Forgot your password?</Text>
        </NameOfPageWarpper>
        <DescriptionWarpper>
          <Text sm>We just need your registered email addess</Text>
        </DescriptionWarpper>
        <DescriptionWarpper>
          <Text sm>to send you password reset</Text>
        </DescriptionWarpper>
        <InputWarpper>
          <Input type="text" placeholder="Email address" />
        </InputWarpper>
        <div>
          <RegiLinkWarpper>
              <NewLink to='/regi'><Text>Register</Text></NewLink>
          </RegiLinkWarpper>
          <TestWrapper>
            <Button >Reset Password</Button>
          </TestWrapper>
        </div>
      </Wrapper>
    </>);
  }
}

export default withRouter(ForgotPasswordForm);