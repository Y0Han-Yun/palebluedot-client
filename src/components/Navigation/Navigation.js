import React from 'react';
import styled from 'styled-components';
import Text from '../Text'
import NewLink from '../NewLink';
import { withRouter } from 'react-router-dom';
import DrawerNav from './index';



const StyledComponent = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background-color: #3a7bd5; 
  border-bottom: 2px solid #f1f1f1;

  .LogoWarpper{
    width: 720px;
    height: 100%;
    display: flex;
   

    .LogoLeftSection{
      justify-content: center;
      align-items: center;
      display: flex;
      width :50%;
      height: 100%;
    }
    .LogoRightSection{
      display: flex;
      width :50%;
      height: 100%;
    }
  }

  .LinkWarpper{
    width :50%;
    height: 100%;
    justify-content: center;
    display: flex;

    .LinkLeftSection{
      width :0%;
    }
    .LinkRightSection{
      width :100%;
      justify-content: space-evenly;
      display: flex;
      flex-shrink: 3;
    }
  }

  @media (max-width: 800px) {
    
    background-color: orange; 

  }

  @media (max-width: 500px) {
    
    background-color: powderblue; 
    
    .LogoLeftSection{
      margin-right: 200px;
      ${() => {
       return <DrawerNav />
      }}
    }
  }
`;

class Navigation extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        <div className="LogoWarpper">
          <div className="LogoLeftSection">
           <Text md white >Pale Blue Dot</Text>
          </div>
          <div className="LogoRightSection" />
        </div>
        <div className="LinkWarpper">
          <div className="LinkLeftSection"/>
          <div className="LinkRightSection">  
            <NewLink to="regi"><Text sm white>SignOut</Text></NewLink>
            <NewLink to="regi"><Text sm white>Register</Text></NewLink>
            <NewLink to="creinvo"><Text sm white>Invoice</Text></NewLink>
            <NewLink to="bin"><Text sm white>Bin</Text></NewLink>
            <i class="fas fa-times"></i>
          </div>
          <i class="fas fa-bars"></i>
          <DrawerNav />
        </div>
      </StyledComponent>
    </>);
  }

}

export default withRouter(Navigation);
