import React from 'react';
import styled from 'styled-components';
import Logo from '../../../components/Logo';
import { Text, Input, Button, NewLink } from '../../../components';
import { spacing } from '../../../config/theme';


const StyledComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  background-color: #313131; 
  

  .Flex{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .Warpper{
      width: 85%;
      height: 85%;

      .LogoWarpper{
        display: flex;
        align-items: center;
        padding-bottom: 100px;
      }
    
      .LinkWarpper{
        display: flex;
        justify-content: flex-start;
        padding-top: 20px;
      }
    
      .ButtonWarpper{
        display: flex;
        
        padding-top: 40px;
        justify-content: center;
        width: 100%;
        flex-direction: column;
        span {
          margin-bottom: ${spacing['0']};
    }
      }
    
      .LinkSection{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
      }
    }
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
              <Text lg normal white>Pale Blue Dot</Text><br/>
            </div>
            <div>
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </div>
            <div className="LinkWarpper">
              <div>
                <Input type="checkbox" />
                <Text white>Remember me</Text>
              </div>
            </div>
            <div className="ButtonWarpper">
              <Button tertiary>Login</Button>
            </div>
            <div className="LinkSection">
              <div>
                <NewLink to="/forgot"><Text white>Forgot Password</Text></NewLink>
              </div>
              <div>
                <NewLink to='/regi'><Text white>Register</Text></NewLink>
              </div>
            </div>
          </div> 
        </div>     
      </StyledComponent>
    </>);
  }
}

export default MobileLogin;