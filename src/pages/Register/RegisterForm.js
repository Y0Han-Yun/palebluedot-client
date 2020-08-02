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
const RegiLinkWarpper = styled.div`
  justify-content: flex-end;
  display: flex;
`;

class RegisterForm extends React.Component{
  render () {
    return (<>
      <Wrapper>
        <NameOfPageWarpper>
          <Text lg>Register</Text>
        </NameOfPageWarpper>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <div>
          <RegiLinkWarpper>
              <NewLink to='/'><Text>Sign in</Text></NewLink>
          </RegiLinkWarpper>
          <TestWrapper>
            <Button >Register</Button>
          </TestWrapper>
        </div>
      </Wrapper>
    </>);
  }
}

export default withRouter(RegisterForm);