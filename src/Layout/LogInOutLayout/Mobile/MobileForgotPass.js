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
  background-color: #1D242B;
  

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


class MobileForgotPass extends React.Component {
  
  render () {
    return (<>
      <StyledComponent>
        <div className='Flex'>
          <div className='Warpper'>
            <div className='LogoWarpper'>
              <Logo size="3rem"/>
              <Text lg normal white>Pale Blue Dot</Text><br/>
            </div>
            <div className='NameOfPageWarpper'>
              <Text md white>Forgot your password?</Text>
            </div>
            <div className='DescriptionWarpper'>
              <Text sm white>We just need your registered email addess</Text>
            </div>
            <div className='DescriptionWarpper'>
              <Text sm white>to send you password reset</Text>
            </div>
            <div>
              <Input type="text" placeholder="Email address" />
            </div>
            <div className="ButtonWarpper">
              <Button tertiary>Reset Password</Button>
            </div>
            <div className="LinkSection">
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

export default MobileForgotPass;