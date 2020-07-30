import { Text, Input, Button } from '../../components';
import { media, spacing } from '../../config/theme';
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

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: ${spacing['0']};
  }
  @media (min-width: ${media.sm}) {
    display: block;
    float: right;
    * {
      display: block;
    }
  }
`;

const CheckboxWapper = styled.div`
  span {
    display: inline;
  }
`;

class LoginForm extends React.Component {

  render () {
    return (<>
      <Wrapper>
        <Text md>Sign In</Text>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div>
          <CheckboxWapper>
            <Input type="checkbox" />
            <Text>Remember me</Text>
          </CheckboxWapper>
          <TestWrapper>
            <Button >Login</Button>
          </TestWrapper>
        </div>
      </Wrapper>
    </>);
  }

}

export default LoginForm;
