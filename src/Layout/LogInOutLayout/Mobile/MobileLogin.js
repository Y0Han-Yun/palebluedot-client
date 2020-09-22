import React from 'react';
import styled from 'styled-components';
import { Text, Input, Button, NewLink } from '../../../components';



const StyledComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  
  .Warpper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 500px) {
    display :inline;
    background-color: yellow;
  }
`;


class MobileLogin extends React.Component {
  
  render () {
    return (<>
      <StyledComponent>
        <div className='Warpper'>
          <Text lg white>Login</Text>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="checkbox" />
          <Text white>Remember me</Text>
          <NewLink to="/forgot"><Text white>Forgot Password</Text></NewLink>
          <NewLink to='/regi'><Text white>Register</Text></NewLink>
          <Button>Login</Button>
        </div>      
      </StyledComponent>
    </>);
  }
}

export default MobileLogin;