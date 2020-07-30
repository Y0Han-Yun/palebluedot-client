import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Text, Input, Button } from '../../components';
import { media, spacing } from '../../config/theme';

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

class RegisterForm extends React.Component{
  render () {
    return (<>
      <Wrapper>
        <Text md>Register</Text>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div>
          <CheckboxWapper>
            <Input type="checkbox" />
            <Text>Remember me</Text>
          </CheckboxWapper>
          <TestWrapper>
            <Button >Register</Button>
          </TestWrapper>
        </div>
      </Wrapper>
    </>);
  }
}

export default withRouter(RegisterForm);