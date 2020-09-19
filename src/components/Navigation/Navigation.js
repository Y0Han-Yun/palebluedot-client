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
  // border-bottom: 2px solid #f1f1f1;
  padding: 0rem 1rem;
  box-sizing: border-box;
  .LogoWarpper{
    // width: 720px;
    height: 100%;
    display: flex;
    flex-grow: 1;

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
    // width :50%;
    height: 100%;
    justify-content: center;
    display: flex;

    .LinkLeftSection{
      width :0%;
    }
    .LinkRightSection{
      width :100%;
      // justify-content: space-evenly;
      align-items: center;
      display: flex;
      flex-shrink: 3;
      p {
        margin-left: 1rem;
      }
    }
  }

  .BurgerWarpper{
    display: none;
  }

  @media (max-width: 500px) {
    
    .LinkWarpper{
      display: none;
    }
    .BurgerWarpper{
      display :inline;
      padding: 10px 20px 10px 10px;
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
          </div>
        </div>

        <div className="BurgerWarpper">
          < DrawerNav />
        </div>  

      </StyledComponent>
    </>);
  }

}

export default withRouter(Navigation);
