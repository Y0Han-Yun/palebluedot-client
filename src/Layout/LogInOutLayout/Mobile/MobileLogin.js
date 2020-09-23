import React from 'react';
import styled from 'styled-components';
import Logo from '../../../components/Logo';
import { Text, Input, Button, NewLink } from '../../../components';



const StyledComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;

  .Flex{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Warpper{
    width: 85%;
    height: 80%;
  }

  .LogoWarpper{
    display: flex;
    align-items: center;
    padding-bottom: 100px;
  }

  .LinkWarpper{
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
  }

  .ButtonWarpper{
    display: flex;
    width: 100%;
    padding-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .LinkSection{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

  }

  @media (max-width: 500px) {
    display :inline;
  }
`;


class MobileLogin extends React.Component {
  
  render () {
    return (<>
      <StyledComponent>
        <div className='Flex'>
          <div className='Warpper'>
            <div className='LogoWarpper'>
              <Logo size="3rem"/>
              <Text lg normal>Pale Blue Dot</Text><br/>
            </div>
            <div>
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </div>
            <div className="LinkWarpper">
              <div>
                <Input type="checkbox" />
                <Text >Remember me</Text>
              </div>
            </div>
            <div className="ButtonWarpper">
              <Button tertiary>Login</Button>
            </div>
            <div className="LinkSection">
              <NewLink to="/forgot"><Text >Forgot Password</Text></NewLink>
              <NewLink to='/regi'><Text >Register</Text></NewLink>
            </div>
          
         </div> 
        </div>     
      </StyledComponent>
    </>);
  }
}

export default MobileLogin;