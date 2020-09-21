import React from 'react';
import styled from 'styled-components';
import { Text, Input, Button, NewLink } from '../../components';
import { spacing } from '../../config/theme';
import Logo from '../../components/Logo';

const StyledComponent = styled.div`
  width: 80%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;

  .LogoWarpper{
    display: none;
  
    .LogoSection{
      display: felx;
      justify-content: center;
      align-items: center;
    }
  }

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
  @media (max-width: 500px) {
    width: 80%;
    height: 80%;

    .LogoWarpper{
      display :inline;
    }

    .NameOfPageWarpper{
      margin-bottom: 10px;
    }

    // .ButtonWrapper{
    //   display: flex;
    //   justify-content: center;
    //   width: 100%;
    //   padding-top: 100px;
    // }
}
`;

class Login extends React.Component {
  render () {
    return (<>
      <StyledComponent>
        <div className="LogoWarpper">
          <div className="LogoSection">
            <div>
              <Logo size="4rem" />
            </div>
            <div>
              <Text md white >Pale Blue Dot</Text>
            </div>
          </div>
        </div>
        <div className='NameOfPageWarpper'>
          <Text lg white>Login</Text>
        </div>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        <div className='LinkWarpper'>
          <div className='CheckboxWapper'>
            <Input type="checkbox" />
            <Text white>Remember me</Text>
          </div>
          <div className='ForgotPasswordWarpper'>
            <NewLink to="/forgot"><Text white>Forgot Password</Text></NewLink>
          </div>
          <div className='RegiLinkWarpper'>
            <NewLink to='/regi'><Text white>Register</Text></NewLink>
          </div>
        </div>
        <div className='ButtonWrapper'>
          <Button>Login</Button>
        </div>
      </StyledComponent>
    </>);
  }
}

export default Login;