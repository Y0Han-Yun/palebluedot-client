import React from 'react';
import styled from 'styled-components';
import Text from '../Text'
import NewLink from '../NewLink';
import { withRouter } from 'react-router-dom';
import BurgerNavigation from './BurgerNavigation';
import BurgerOpenButton from './BurgerOpenButton';

const Warpper = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background-color: #3a7bd5; 
  border-bottom: 2px solid #f1f1f1
  @media (min-width: 500px) {
    background-color : #3a6073;
  };
`;
const LogoWarpper = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;

const LogoLeftSection = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;
const LogoRightSection = styled.div`
  width :50%;
`;
const LinkWarpper = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;
const LinkLeftSection = styled.div`
  width :50%;
`;
const LinkRightSection = styled.div`
  width :50%;
  justify-content: space-evenly;
  display: flex;
`;

class Navigation extends React.Component {

  constructor(props){
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.state = {
      visible: false
    };
  };

  handleMouseDown(e){
    this.toggleMenu();
    console.log("Clicked!");
    e.stopPropagation();
  };

  toggleMenu(){
    this.setState({
      visible : !this.state.visible
    });
  }

  bugerOpen(){
   return alert('hello!');
  };
  render () {
    return (<>
      <Warpper>
        <LogoWarpper>
          <LogoLeftSection onClick={this.bugerOpen}>
            <Text md white >Pale Blue Dot</Text>
          </LogoLeftSection>
          <LogoRightSection/>
        </LogoWarpper>
        <BurgerOpenButton onClick={this.handleMouseDown}>햄버거 네비 버튼</BurgerOpenButton>
        <LinkWarpper>
          <LinkLeftSection/>
          <LinkRightSection>  
            <NewLink to="regi"><Text sm white>SignOut</Text></NewLink>
            <NewLink to="regi"><Text sm white>Register</Text></NewLink>
            <NewLink to="creinvo"><Text sm white>Invoice</Text></NewLink>
            <NewLink to="bin"><Text sm white>Bin</Text></NewLink>
          </LinkRightSection>
        </LinkWarpper>
      </Warpper>
      <BurgerNavigation />
    </>);
  }

}

export default withRouter(Navigation);
