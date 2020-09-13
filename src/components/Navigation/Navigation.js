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
  border-bottom: 2px solid #f1f1f1

  @media (max-width: 500px) {
    display: block;
    float: right;
    background-color: powderblue;
  }

  .LogoWarpper{
    width :50%;
    justify-content: center;
    display: flex;

    .LogoLeftSection{
      width :50%;
      justify-content: center;
      display: flex;
    }
    .LogoRightSection{
      width :50%;
    }
  }

  .LinkWarpper{
    width :50%;
    justify-content: center;
    display: flex;

    .LinkLeftSection{
      width :50%;
    }
    .LinkRightSection{
      width :50%;
      justify-content: space-evenly;
      display: flex;
    }
  }
`;


class Navigation extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        <div className="LogoWarpper">
          <DrawerNav />
          <div className="LogoLeftSection">
            <Text md white >Pale Blue Dot</Text>
          </div>
          <div className="LogoRightSection"/>
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
      </StyledComponent>
    </>);
  }

}

export default withRouter(Navigation);
