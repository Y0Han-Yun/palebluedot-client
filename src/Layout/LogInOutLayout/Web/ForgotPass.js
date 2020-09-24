import React from 'react';
import styled from 'styled-components';
import { Text, Input, Button, NewLink } from '../../../components';
import { spacing } from '../../../config/theme';
import MobileForgotPass from '../Mobile/MobileForgotPass';

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

  .DescriptionWarpper{
    margin: 0px;
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
  
  @media (max-width: 500px) {
    .WebLayout{
      display :none;
    }
  }

`;

class ForgotPass extends React.Component {
  render () {
    return (<>
      <StyledComponent>
        <MobileForgotPass />
        <div className='WebLayout'>
          <div className='NameOfPageWarpper'>
            <Text lg white>Forgot your password?</Text>
          </div>
          <div className='DescriptionWarpper'>
            <Text sm white>We just need your registered email addess</Text>
          </div>
          <div className='DescriptionWarpper'>
            <Text sm white>to send you password reset</Text>
          </div>
          <Input type="text" placeholder="Email address" />
          <div className='LinkWarpper'>
            <div className='RegiLinkWarpper'>
            <NewLink to='/regi'><Text white>Register</Text></NewLink>
            </div>
          </div>
          <div className='ButtonWrapper'>
            <Button >Reset Password</Button>
          </div>
        </div>
      </StyledComponent>
    </>);
  }
}

export default ForgotPass;