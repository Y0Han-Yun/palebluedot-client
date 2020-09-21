import React from 'react';
import styled from 'styled-components';
import { Text, Input, Button, NewLink } from '../../components';
import { spacing } from '../../config/theme';

const StyledComponent = styled.div`
  width: 80%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;

  .NameOfPageWarpper{
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  .LinkWarpper{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 10px;

    .CheckboxWapper{
      span {
        display: inline;
      }
      width: 50%;
    }

    .ForgotPasswordWarpper{
      width: 35%;
    }
    
    .RegiLinkWarpper{
      width: 15%;
      justify-content: flex-end;
    }
    
  }
  .ButtonWrapper{
    display: flex;
    width: 100%;
    flex-direction: column;
    span {
      margin-bottom: ${spacing['0']};
    }
    padding-top: 100px;
  }
`;

class Register extends React.Component {
  render () {
    return (<>
      <StyledComponent>
        <div className='NameOfPageWarpper'>
          <Text lg white>Register</Text>
        </div>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <div className='LinkWarpper'>
          <div className='CheckboxWapper' />
          <div className='ForgotPasswordWarpper'>
            <NewLink to="/forgot"><Text white>Forgot Password</Text></NewLink>
          </div>
          <div className='RegiLinkWarpper'>
            <NewLink to='/'><Text white>Sign In</Text></NewLink>
          </div>
        </div>
        <div className='ButtonWrapper'>
            <Button>Register</Button>
        </div>
      </StyledComponent>
    </>);
  }
}

export default Register;